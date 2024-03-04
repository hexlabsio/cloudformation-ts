import * as fs from "fs";
import * as request from "request-promise";
import DocsCache, {Documentation} from "../docs/docs";
import {PropertyInfo, Specification, Typed} from "./model";

export type NameLocationContent = [string, string, string];

const missingResources: Partial<Specification> = {
  ResourceTypes: {
    'AWS::ApiGatewayV2::ApiGatewayManagedOverrides': {
      Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html',
      Properties: {
        ApiId: {
          Required: true,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-apiid',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        Integration: {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-integration',
          Type: 'IntegrationOverrides',
          UpdateType: 'Mutable'
        },
        Route: {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-route',
          Type: 'RouteOverrides',
          UpdateType: 'Mutable'
        },
        Stage: {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-stage',
          Type: 'StageOverrides',
          UpdateType: 'Mutable'
        }
      }
    },
    'AWS::CUR::ReportDefinition': {
      Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html',
      Properties: {
        AdditionalArtifacts: {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-additionalartifacts',
          UpdateType: 'Mutable',
          Type: "List",
          PrimitiveItemType: "String"
        },
        AdditionalSchemaElements: {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-additionalschemaelements',
          UpdateType: 'Mutable',
          Type: "List",
          PrimitiveItemType: "String"
        },
        BillingViewArn: {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-billingviewarn',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        Compression: {
          Required: true,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-compression',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        Format: {
          Required: true,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-format',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        RefreshClosedReports: {
          Required: true,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-refreshclosedreports',
          PrimitiveType: 'Boolean',
          UpdateType: 'Mutable'
        },
        ReportName: {
          Required: true,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-reportname',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        ReportVersioning: {
          Required: true,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-reportversioning',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        S3Bucket: {
          Required: true,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-s3bucket',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        S3Prefix: {
          Required: true,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-s3prefix',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        S3Region: {
          Required: true,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-s3region',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        TimeUnit: {
          Required: true,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-timeunit',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        }
      }
    }
  },
  PropertyTypes: {
    'AWS::ApiGatewayV2::ApiGatewayManagedOverrides.IntegrationOverrides': {
      Properties: {
        Description : {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides-description',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        IntegrationMethod: {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides-integrationmethod',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        PayloadFormatVersion: {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides-payloadformatversion',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        TimeoutInMillis : {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides-timeoutinmillis',
          PrimitiveType: 'Integer',
          UpdateType: 'Mutable'
        }
      }
    },
    'AWS::ApiGatewayV2::ApiGatewayManagedOverrides.RouteOverrides': {
      Properties: {
        AuthorizationScopes : {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routeoverrides-authorizationscopes',
          Type: 'List',
          PrimitiveItemType: 'String',
          UpdateType: 'Mutable'
        },
        AuthorizationType: {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routeoverrides-authorizationtype',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        AuthorizerId: {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routeoverrides-authorizerid',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        OperationName : {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routeoverrides-operationname',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        Target : {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routeoverrides-target',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        }
      }
    },
    'AWS::ApiGatewayV2::ApiGatewayManagedOverrides.StageOverrides': {
      Properties: {
        AccessLogSettings : {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-stageoverrides-accesslogsettings',
          PrimitiveType: 'Json',
          UpdateType: 'Mutable'
        },
        AutoDeploy : {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-stageoverrides-autodeploy',
          PrimitiveType: 'Boolean',
          UpdateType: 'Mutable'
        },
        DefaultRouteSettings : {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-stageoverrides-defaultroutesettings',
          PrimitiveType: 'Json',
          UpdateType: 'Mutable'
        },
        Description : {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-stageoverrides-description',
          PrimitiveType: 'String',
          UpdateType: 'Mutable'
        },
        RouteSettings : {
          Required: false,
          Documentation: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-stageoverrides-routesettings',
          PrimitiveType: 'Json',
          UpdateType: 'Mutable'
        },
        StageVariables : {
          Required: false,
          Documentation: 'StageVariables',
          PrimitiveType: 'Json',
          UpdateType: 'Mutable'
        }
      }
    }
  }
};

(async () => {
  const original: Specification = await request({ gzip: true, uri: 'https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json', json: true});
  // const original: Specification = (await import('../../../fallback.json')).default;
  const spec: Specification =  {
    ...original,
    ResourceTypes: {...original.ResourceTypes, ...missingResources.ResourceTypes},
    PropertyTypes: {...original.PropertyTypes, ...missingResources.PropertyTypes}
  };
  const docsCache: DocsCache = new DocsCache();
  const progress: number[] = []
  const resources = await Promise.all(Object.keys(spec.ResourceTypes)
    .map(async (resourceKey, index, arr) => {
      const promise = buildType(spec.ResourceTypes[resourceKey], true, resourceKey, docsCache)
      const result = await promise;
      progress.push(0);
      console.log(`${progress.length} / ${arr.length} complete (${resourceKey})`)
      return result;
    }));
  const properties = await Promise.all(Object.keys(spec.PropertyTypes).map(async resourceKey => await buildType(spec.PropertyTypes[resourceKey], false, resourceKey, docsCache)));
  const all = [...resources, ...properties];
  buildAwsType(resources);
  all.filter(it => it[0] != '').forEach(([name, location, body]) => {
    const dir = 'src/' + location.replace(/\./g, '/');
    fs.mkdirSync(dir, {recursive: true});
    fs.writeFileSync(`${dir}/${name}.ts`, body);
  })
})();

function lowerFirst<S extends string>(value: S): S extends `${infer F}${infer Rest}` ? `${Lowercase<F>}${Rest}}` : S{
  return `${value.substring(0,1).toLowerCase()}${value.substring(1)}` as any;
}

function groupByService(resources: NameLocationContent[]): { [service: string]: NameLocationContent[]} {
  const groups: { [service: string]: NameLocationContent[]} = {};
  resources.forEach(([name, location]) => {
    const [platform, service] = location.split('.');
    const item = lowerFirst(name);
    const updatedItem = item === 'function' ? `${service}Function`: item;
    groups[platform] = { ...groups[platform], [service]: { ...groups[platform]?.[service], [item]: `{ load: async () => (await import('../${location.replace(/\./g, '/')}/${name}')).${updatedItem} }` } }
  })
  return groups;
}



function buildAwsType(resources: NameLocationContent[]) {
  const result = groupByService(resources);
  const resourcesString = Object.keys(result)
    .map(platform => `${platform} : {\n${Object.keys(result[platform]).map(service => `${service} : {\n${Object.keys(result[platform][service]).map(resource => `${resource} : ${result[platform][service][resource]}`)}}`).join(',\n')}}`)
    .join(',\n');
  const code = `export const resources = {\n${resourcesString}};`
  fs.writeFileSync('src/cloudformation/aws-resources.ts', code);
}
function attName(name: string) { return name.replace(/\./g, '_')}

function attributeCode(attributes: PropertyInfo['Attributes'], allPropsOptional: boolean, newName: string, prop: string, name: string, location: string, descriptionString: string, functionName: string, lowerName: string): string {
  const atts = Object.keys(attributes!).map(attribute => {
    const attributeType = getType(rename(attributes![attribute]), attribute, location, false);
    return `${attName(attribute)}: Attribute<${stringFor(attributeType)}>`
  }).join(';');
  const attributeNames = Object.keys(attributes!).map(attribute => `${attName(attribute)}: '${attribute}'`).join(',');
  return `export type ${prop}Attributes = { ${atts} }
export type ${newName} = AwsResource<'${name}', ${prop}Properties, ${prop}Attributes>
${descriptionString}
export function ${functionName}(${lowerName}Props: ${prop}Properties${allPropsOptional ? ' = {}' : ''}): ${newName} {
  return new AwsResource('${name}', ${lowerName}Props, { ${attributeNames} });
}
   `;
}

function rename(prop: Typed): Typed {
  if(prop.Type === 'Json' || prop.PrimitiveType === 'Json' || prop.ItemType === 'Json' || prop.Type === 'Tag' || prop.ItemType === 'Tag') return prop;
  if(prop.ItemType) return { ...prop, ItemType: prop.ItemType + 'Props' };
  if(prop.PrimitiveType || prop.PrimitiveItemType) return prop;
  if(prop.Type) return { ...prop, Type: prop.Type + 'Props' };
  return prop;
}

function descriptionString(documentation: Documentation, documentationLocation?: string, ) {
  return `/**
  ${(documentation.description || '')}
  For full documentation go to <a href="${documentationLocation || ''}">the AWS Docs</a>
*/`;
}

async function buildType(from: PropertyInfo, resource: boolean, name: string, docsCache: DocsCache): Promise<NameLocationContent> {
  const split = name.split('::');
  const allPropsOptional = !Object.keys(from.Properties ?? {}).some(it => from.Properties![it].Required);
  const nameParts = [...split.slice(0, -1).map(s => s.toLowerCase()), ...(resource ? [] : split[split.length-1].split('.').slice(0,-1).map(it => it.toLowerCase()))];
  const location = name === 'Tag' ? 'aws' : nameParts.join('.');
  const lastPart = split[split.length - 1].split('.');
  const lastNamePart = nameParts[nameParts.length - 1];
  const prop = lastPart[lastPart.length - 1];
  const newName = prop === 'Function' ? `${lastNamePart}Function` : prop;
  const upperName = newName.substring(0, 1).toUpperCase() + newName.substring(1);
  const namePart = lastPart[lastPart.length - 1];
  const lowerName = namePart.substring(0,1).toLowerCase() + namePart.substring(1);
  const functionName = lowerName === 'function' ? newName : lowerName;
  const documentation = await docsCache.get(from.Documentation!);
  const comments = descriptionString(documentation, from.Documentation);
  const excess = resource ? (from.Attributes ? attributeCode(from.Attributes, allPropsOptional, upperName, prop, name, location, comments, functionName, lowerName) :
    `${comments}
export type ${upperName} = AwsResource<'${name}', ${prop}Properties>
export function ${functionName}(${lowerName}Props: ${prop}Properties${allPropsOptional ? ' = {}' : ''}): ${upperName} {
  return new AwsResource('${name}', ${lowerName}Props);
}
  `) : '';

  if(from.Properties) {
    const props: PropertyInfo['Properties']  = Object.keys(from.Properties!).reduce((prev, cur) => ({...prev, [cur]: rename(from.Properties![cur])}), {});
    const properties: [string, TypeInfo][] = Object.keys(props).map(k => [k, getType(props![k], k, location + (resource ? ('.' + lowerName) : ''), true)]);
    const attributes: [string, TypeInfo][] = Object.keys(from.Attributes || {}).map(k => [k, getType(rename(from.Attributes![k]), k, location + (resource ? ('.' + lowerName) : ''), false)]);
    const attImport: [string, TypeInfo][] = from.Attributes ? [["Attribute", { name: 'Attribute', locations: ['cloudformation'] }as TypeInfo]]: [];
    const resourceImport: [string, TypeInfo][] = resource ? [["AwsResource", { name: 'AwsResource', locations: ['cloudformation.resources'] }as TypeInfo]]: [];
    const all: [string, TypeInfo][] = [...properties, ...attributes, ...attImport, ...resourceImport];
    const interfaceName = prop + ((resource || prop === 'Tag') ? '' : 'Props');
    const importString = importsForProperties(all.map(([_,b]) => b), location, interfaceName, resource);
    const result: NameLocationContent = [interfaceName, location, `${importString}
${excess}
${comments}
export interface ${interfaceName}${resource ? 'Properties ' : ''}{
  ${properties.map(it => `
  /** ${docForProperty(it[0], documentation).replaceAll('*/', '\\u{002A}/')} */
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
  return [...new Set(properties.flatMap(importsFor).filter(it => resource || it.name !== name).map(it => `import { ${it.name}${it.others ?? ''} } from '${importLocation(it.name, it.locations![0], currentLocation, )}';`))].join('\n');
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

const excludes = ['Json', 'CredentialsMapProps', 'ProfilePropertiesProps', 'TokenUrlCustomPropertiesProps', 'CustomPropertiesProps']

function importsFor(info: TypeInfo): TypeInfo[] {
  if(excludes.includes(info.name)) return [];
  const imports: TypeInfo[] = info.locations ? [{name: info.name, locations: info.locations, required: info.required, others: info.others}] : [];
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
  others?: string;
  subtypes?: TypeInfo[];
  locations?: string[];
  required: boolean;
}

function valueOfType(type: TypeInfo): TypeInfo {
  return { name: 'Value', locations: ['cloudformation'], subtypes: [type], required: type.required };
}

function getType(from: Typed, name: string, location: string, wrapped: boolean): TypeInfo {
  let type: TypeInfo = { name: 'string', required: !!from.Required };
  if(from.Type && excludes.includes(from.Type)) {
    return primitiveType(from.Type, !!from.Required, name);
  }
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
    if(from.Type === 'Map'){
      if(from.ItemType === 'ListProps') {
        return { name: 'map', subtypes: [{ name: 'string', required: !!from.Required },  { name: 'array', subtypes: [{ name: 'string', required: !!from.Required }], required: !!from.Required } ], required: !!from.Required};
      }
      return { name: 'map', subtypes: [{ name: 'string', required: !!from.Required }, subtype ], required: !!from.Required};
    }
    else { return { name: 'array', subtypes: [subtype], required: !!from.Required }; }
  }
  else if(from.Type === 'Json') {
    return { name: 'any', required: !!from.Required  }
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
    case 'Json': return propertyName.includes('PolicyDocument') ? { name: 'PolicyDocument', required, locations: ['cloudformation.iam']  }: { name: 'any', required  };
    default: return { name: 'any', required };
  }
}
