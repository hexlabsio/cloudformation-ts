import * as fs from "fs";
import {nameFor, TypeDefinition, typeDefinitionFor} from "./type-definition";
export type MappedTypeDetail = TypeDetail & { interfaceName: TypeDefinition; required:  { [key: string]: TypeDefinition }; notRequired: { [key: string]: TypeDefinition }; awsType: string }
export type TypeDetail = { type: string; name: string; resource: boolean; required: { [key: string]: string }; notRequired: { [key: string]: string } }
export type TypeInfo = {
  [typeName: string]: TypeDetail;
}

function importsFrom(typeDefinition: TypeDefinition, imports: TypeDefinition[] = []): TypeDefinition[] {
  if(typeDefinition.location || typeDefinition.typeName === 'Value') imports.push(typeDefinition);
  if((typeDefinition as any).childType){
    return importsFrom((typeDefinition as any).childType, imports);
  }
  return imports;
}

function keyValues(item: any): any {
  if(item) {
    return Object.keys(item).reduce((previous, key) => ({...previous, [key]: typeDefinitionFor(item[key])}), {});
  }
  return item;
}

function countMatching(a: any[], b: any[]): number {
  let index = 0;
  while(index < a.length && index < b.length && a[index] === b[index]) {
    index++;
  }
  return index;
}

function importsFor(type: MappedTypeDetail): string[] {
  return [...[
    ...Object.keys(type.required).flatMap(key => importsFrom(type.required[key])),
    ...Object.keys(type.notRequired).flatMap(key => importsFrom(type.notRequired[key])),
    ...(type.resource ? [{ typeName: 'KloudResource', location: 'kloudformation'}]: [])
  ].map(im => {
    if (type.interfaceName.location) {
      const location = type.interfaceName.location!.split('.');
      const importLocation = im.location!.split('.');
      const matching = countMatching(location, importLocation);
      const rest = [...Array(importLocation.length - matching)].map(() => importLocation.pop()).reverse().join('/');
      const prefix = [...new Array(location.length - matching)].map(() => '..').join('/');
      const importString = `${prefix === '' ? '.' : prefix}${rest === '' ? '' : `/${rest}`}/${im.typeName}`;
      return `import { ${im.typeName} } from '${importString}';`;
    } else return im.location;
  }).reduce((prev, im) => prev.add(im!), new Set<string>())];
}

function functionFor(type: MappedTypeDetail): string {
  let name = type.interfaceName.typeName.substring(0,1).toLowerCase() + type.interfaceName.typeName.substring(1);
  if(name === 'function') name = 'lambdaFunction';
  const returnType = type.resource ? `{ ...${name}Props, _logicalType: '${type.awsType}' }` : `${name}Props`;
  const argType = type.resource ? `${type.interfaceName.typeName} & { logicalName?: string }` : type.interfaceName.typeName;
  return `\nexport function ${name}(${name}Props: ${argType}): ${type.interfaceName.typeName} { return (${returnType}) as unknown as ${type.interfaceName.typeName} }\n`
}

function interfaces(typeInformation: TypeInfo): MappedTypeDetail[] {
  return Object.keys(typeInformation).filter(it => it !== 'default')
  .map(it => ({ awsType: it, ...typeInformation[it] }))
  .map(it => ({
    ...it,
    interfaceName: typeDefinitionFor(it.type, it.resource),
    required: keyValues(it.required),
    notRequired: keyValues(it.notRequired)
  }))
}

function fileInfo(typeInformation: MappedTypeDetail[]): (TypeDefinition & { content: string })[] {
  return typeInformation.map(it => (
    { ...it.interfaceName, content: importsFor(it).join('\n') + '\n' + functionFor(it) + `\nexport interface ${it.interfaceName.typeName + (it.resource ? ' extends KloudResource' : '')} {\n` +
        [
          ...Object.keys(it.required).map(key => `    ${key}: ${nameFor(it.required[key])};`),
          ...Object.keys(it.notRequired).map(key => `    ${key}?: ${nameFor(it.notRequired[key])};`)
        ].join('\n')
        +`\n}` }
    ));
}

export function generate(typeInformation: TypeInfo): void {
  const typeInfo = interfaces(typeInformation);
  const imports = typeInfo.filter(it => it.resource).map(it => {
    const prefix = it.interfaceName.location!.split('.').pop();
    const name = it.interfaceName.typeName.substring(0,1).toLowerCase() + it.interfaceName.typeName.substring(1);
    const asImport = name === 'function' ? 'lambdaFunction' : `${name} as ${prefix}${it.interfaceName.typeName}`;
    return `import { ${asImport} } from '../${it.interfaceName.location!.replace(/\./g, '/')}/${it.interfaceName.typeName}';`;
  }).join('\n');
  const parent = imports + '\n\nexport const aws = {\n' + typeInfo.filter(it => it.resource).map(it => {
    const prefix = it.interfaceName.location!.split('.').pop();
    console.log(prefix + it.interfaceName.typeName);
    return '    ' + prefix + it.interfaceName.typeName
  }).join(',\n') + '\n};';
  fs.writeFileSync('src/kloudformation/template.ts', parent);
  fileInfo(typeInfo).forEach(it => {
    if(!it.location) {
      console.error(it);
    }else {
      const location = 'src/' + it.location.replace(/\./g, '/');
      if (!fs.existsSync(location)) {
        fs.mkdirSync(location, {recursive: true});
      }
      fs.writeFileSync(location + '/' + it.typeName + '.ts', it.content);
    }
  });
}
