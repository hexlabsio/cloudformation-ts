import * as fs from "fs";
// @ts-ignore
import request from "request-promise";
import DocsCache, {Documentation} from "../docs/docs";
import {Property, PropertyInfo, Specification, Typed} from "./model";

export type NameLocationContent = [string, string, string];

(async () => {
  const spec: Specification = await request({ gzip: true, uri: 'https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json', json: true});
  const docsCache: DocsCache = new DocsCache();
  const resources = await Promise.all(Object.keys(spec.ResourceTypes).map(async resourceKey => await buildType(spec.ResourceTypes[resourceKey], true, resourceKey, docsCache)));
  const properties = await Promise.all(Object.keys(spec.PropertyTypes).map(async resourceKey => await buildType(spec.PropertyTypes[resourceKey], false, resourceKey, docsCache)));
  const all = [...resources, ...properties];
  buildAwsType(resources);
  all.filter(it => it[0] != '').forEach(([name, location, body]) => {
    const dir = 'src/' + location.replace(/\./g, '/');
    fs.mkdirSync(dir, {recursive: true});
    fs.writeFileSync(`${dir}/${name}.ts`, body);
  })
})();

function buildAwsType(resources: NameLocationContent[]) {
  const imports = resources.map(it => {
    const location = it[1].split('.').slice(1).map((it, index) => index > 0 ? (it.substring(0,1).toUpperCase() + it.substring(1)) : it).join('');
    const asImport = it[0] === 'Function' ? 'lambdaFunction' : `${it[0].substring(0,1).toLowerCase() + it[0].substring(1)} as ${location}${it[0]}`;
    return `import { ${asImport} } from '../${it[1].replace(/\./g, '/')}/${it[0]}';`;
  }).join('\n');
  const parent = imports + '\n\nexport type AWS = typeof aws;' +
    '\n\nexport const aws = {\n' + resources.map(it => {
      const location = it[1].split('.').slice(1).map((it, index) => index > 0 ? (it.substring(0,1).toUpperCase() + it.substring(1)) : it).join('');
      return '    ' + location + it[0];
    }).join(',\n') + '\n};';
  fs.writeFileSync('src/kloudformation/aws.ts', parent);
}

async function buildType(from: PropertyInfo, resource: boolean, name: string, docsCache: DocsCache): Promise<NameLocationContent> {
  const split = name.split('::');
  const nameParts = [...split.slice(0, -1).map(s => s.toLowerCase()), ...(resource ? [] : split[split.length-1].split('.').slice(0,-1).map(it => it.toLowerCase()))];
  const location = name === 'Tag' ? 'aws' : nameParts.join('.');
  const lastPart = split[split.length - 1].split('.');
  const prop = lastPart[lastPart.length - 1];
  const lowerName = prop.substring(0,1).toLowerCase() + prop.substring(1);
  const functionName = lowerName === 'function' ? 'lambdaFunction' : lowerName;
  let excess = '';
  const documentation = await docsCache.get(from.Documentation);
  const descriptionString = `/**
  ${documentation.description || ''}
  For full documentation go to <a href="${from.Documentation || ''}">the AWS Docs</a>
*/`;
  if(resource) {
    if(from.Attributes) {
      function attName(name: string) { return name.replace(/\./g, '_')}
      const attributes = Object.keys(from.Attributes).map(attribute => `${attName(attribute)}: Attribute<${stringFor(getType(from.Attributes![attribute], attribute, location, false))}>`).join(';');
      const attributeNames = Object.keys(from.Attributes).map(attribute => `${attName(attribute)}: '${attribute}'`).join(',');
      excess = `export type ${prop}Attributes = { ${attributes} }
${descriptionString}
export function ${functionName}(${lowerName}Props: ${prop}): ${prop} & {attributes: ${prop}Attributes} { return ({ ...${lowerName}Props, _logicalType: '${name}', attributes: { ${attributeNames} } }) }
   `;
    } else {
      excess = `${descriptionString}
export function ${functionName}(${lowerName}Props: ${prop}): ${prop} { return ({ ...${lowerName}Props, _logicalType: '' }) }
  `;
    }
  }
  function rename(prop: Property): Property {
    if(prop.Type === 'Json' || prop.ItemType === 'Json' || prop.Type === 'Tag' || prop.ItemType === 'Tag') return prop;
    if(prop.ItemType) return { ...prop, ItemType: prop.ItemType + 'Props' };
    if(prop.Type) return { ...prop, Type: prop.Type + 'Props' };
    return prop;
  }
  if(from.Properties) {
    const props: PropertyInfo['Properties']  = Object.keys(from.Properties!).reduce((prev, cur) => ({...prev, [cur]: rename(from.Properties![cur])}), {});
    const properties: [string, TypeInfo][] = Object.keys(props).map(k => [k, getType(props![k], k, location + (resource ? ('.' + lowerName) : ''), true)]);
    const attributes: [string, TypeInfo][] = Object.keys(from.Attributes || {}).map(k => [k, getType(from.Attributes![k], k, location, false)]);
    const attImport: [string, TypeInfo][] = from.Attributes ? [["Attribute", { name: 'Attribute', locations: ['kloudformation'] }as TypeInfo]]: [];
    const resourceImport: [string, TypeInfo][] = resource ? [["KloudResource", { name: 'KloudResource', locations: ['kloudformation'] }as TypeInfo]]: [];
    const all: [string, TypeInfo][] = [...properties, ...attributes, ...attImport, ...resourceImport];
    const interfaceName = prop + ((resource || prop === 'Tag') ? '' : 'Props');
    const importString = importsForProperties(all.map(([_,b]) => b), location, interfaceName, resource);
    const result: NameLocationContent = [interfaceName, location, `${importString}
${excess}
${descriptionString}
export interface ${interfaceName} ${resource ? 'extends KloudResource ' : ''}{
  ${properties.map(it => `
  /** ${docForProperty(it[0], documentation)} */
  ${it[0].substring(0,1).toLowerCase()}${it[0].substring(1)}${it[1].required ? '': '?'}: ${updateType(stringFor(it[1]), it[0], documentation)}`).join('\n  ')}
}`];
    return result;
  }
  const interfaceName = prop + (resource ? '' : 'Props');
  const type = getType(rename(from), prop, location, true);
  const imports = importsForProperties([type], location, interfaceName, resource);
  return [interfaceName,location,`${imports}\nexport type ${interfaceName} = ${stringFor(type)};`];
}

function updateType(type: string, name: string, documentation: Documentation): string {
  if(documentation && documentation.properties && documentation.properties.hasOwnProperty(name)) {
    if(documentation.properties[name]["Allowed values"] && type === 'Value<string>') {
      const allowedValues = documentation.properties[name]["Allowed values"];
      const values = allowedValues.substring(allowedValues.indexOf('<code>') + 6, allowedValues.indexOf('</code>')).split('|').map(it => `'${it.trim()}'`);
      return `Value<${values.join(' | ')}>`;
    }
  }
  return type;
}

function docForProperty(name: string, documentation: Documentation): string {
  if(documentation && documentation.properties && documentation.properties.hasOwnProperty(name)) {
    const subprops = documentation.properties[name];
     return subprops.Description + Object.keys(subprops)
     .filter(it => it !== 'Description' && it !== 'Type')
     .reduce((str, current) => {
      return `${str}\n${current}: ${subprops[current].replace('*/', '*§/')}`
      }, '')
  }
  return '';
}

function importsForProperties(properties: TypeInfo[], currentLocation: string, name: string, resource: boolean): string {
  return [...new Set(properties.flatMap(importsFor).filter(it => resource || it.name !== name).map(it => `import { ${it.name} } from '${importLocation(it.name, it.locations![0], currentLocation, )}';`))].join('\n');
}

function importLocation(name: string, locationName: string, currentLocation: string) {
  const importLocation = name === 'Tag' ? ['aws'] : locationName.split('.');
  const location = currentLocation.split('.');
  const matching = countMatching(importLocation, location);
  const rest = [...Array(importLocation.length - matching)].map(() => importLocation.pop()!.toLocaleLowerCase()).reverse().join('/');
  const prefix = [...new Array(location.length - matching)].map(() => '..').join('/');
  return `${prefix === '' ? '.' : prefix}${rest === '' ? '' : `/${rest}`}/${name}`;
}

function countMatching(a: any[], b: any[]): number {
  let index = 0;
  while(index < a.length && index < b.length && a[index] === b[index]) {
    index++;
  }
  return index;
}

function importsFor(info: TypeInfo): TypeInfo[] {
  const imports: TypeInfo[] = info.locations ? [{name: info.name, locations: info.locations, required: info.required}] : [];
  return (info.subtypes || []).reduce((imports, subtype) => [...imports, ...importsFor(subtype)], imports);
}

function stringFor(type: TypeInfo): string {
  if(type.subtypes) {
    if(type.name === 'array') return stringFor(type.subtypes[0]) + '[]';
    else if(type.name === 'map') return `{ [key: ${stringFor(type.subtypes[0])}]: ${stringFor(type.subtypes[1])} }`;
    else return `${type.name}<${type.subtypes.map(stringFor).join()}>`;
  }
  return type.name;
}

interface TypeInfo {
  name: string;
  subtypes?: TypeInfo[];
  locations?: string[];
  required: boolean;
}

function valueOfType(type: TypeInfo): TypeInfo {
  return { name: 'Value', locations: ['kloudformation'], subtypes: [type], required: type.required };
}



function getType(from: Typed, name: string, location: string, wrapped: boolean): TypeInfo {
  let type: TypeInfo = { name: 'string', required: !!from.Required };
  if(from.PrimitiveType) {
    type = primitiveType(from.PrimitiveType, !!from.Required, name);
  } else if(from.PrimitiveItemType || from.ItemType === 'Json') {
    const simpleType = primitiveType(from.PrimitiveItemType || 'Json', !!from.Required, name);
    const subtype = wrapped ? valueOfType(simpleType) : simpleType;
    if(from.Type === 'Map'){ type = { name: 'map', subtypes: [{ name: 'string', required: !!from.Required }, subtype ], required: !!from.Required}; }
    else { type = { name: 'array', subtypes: [subtype], required: !!from.Required }; }
  } else if(from.ItemType) {
    let subtype: TypeInfo = { name: from.ItemType, locations: [location], required: !!from.Required };
    if(from.ItemType === 'FindingsFilterListItem' || from.ItemType === 'ParameterValuesProps') {
      subtype = { name: 'array', subtypes: [{ name: 'any', required:!!from.Required }], required: !!from.Required };
    }
    if(from.Type === 'Map'){ return { name: 'map', subtypes: [{ name: 'string', required: !!from.Required }, subtype ], required: !!from.Required}; }
    else { return { name: 'array', subtypes: [subtype], required: !!from.Required }; }
  }
  else if(from.Type){
    return { name: from.Type, locations: [location], required: !!from.Required }
  }
  if(wrapped) return valueOfType(type!);
  return type;
}

function primitiveType(from: string, required: boolean, propertyName: string): TypeInfo {
  switch (from) {
    case 'Integer': return { name: 'number', required };
    case 'Long': return { name: 'number', required  };
    case 'Double': return { name: 'number', required  };
    case 'Boolean': return { name: 'boolean', required  };
    case 'String': return { name: 'string', required  };
    case 'Json': return propertyName.includes('PolicyDocument') ? { name: 'PolicyDocument', required, locations: ['kloudformation.iam']  }: { name: 'any', required  };
    default: return { name: 'any', required };
  }
}
