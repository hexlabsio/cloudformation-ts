
export interface TypeDefinition {
  location?: string;
  typeName: string;
}

export class ParamType implements TypeDefinition{
  childType: TypeDefinition;
  typeName: string;
  location?: string;
  
  constructor(typeName: string, childType: TypeDefinition, location?: string) {
    this.childType = childType;
    this.typeName = typeName;
    this.location = location;
  }
}

export function nameFor(typeDefinition: TypeDefinition): string {
  const child = (typeDefinition as any).childType;
  switch(typeDefinition.typeName) {
    case 'array': return `${nameFor(child)}[]`;
    case 'map': return `{ [key: string]: ${nameFor(child)} }`;
    case 'Value': return `Value<${nameFor(child)}>`;
    case 'java.time.Instant': return 'string';
    case 'com.fasterxml.jackson.databind.JsonNode': return 'any';
    default: return typeDefinition.typeName;
  }
}

export const stringType = { typeName: 'string' };
export const booleanType = { typeName: 'boolean' };
export const numberType = { typeName: 'number' };

export function typeDefinitionFor(type: string, resource = false): TypeDefinition {
  if(type) {
    if(type === 'kotlin.String') return stringType;
    if(type === 'Boolean') return booleanType;
    if(type === 'kotlin.Int' || type === 'Double' || type === 'Long') return numberType;
    if(type === 'io.kloudformation.property.Tag' || type === 'Tag'){
      return { typeName: 'Tag', location: 'aws'};
    }
    if(type.startsWith('io.kloudformation.property.alexa')) {
      return typeDefinitionFor('Alexa::' + type.substring('io.kloudformation.property.alexa'.length+1).replace('.', '::'))
    }

    else if (type.startsWith('io.kloudformation.property')) {
      return typeDefinitionFor(type.substring('io.kloudformation.property'.length+1).replace('.','::'));
    }
    if(type.includes('<')) {
      const prefix = type.substring(0, type.indexOf('<'));
      if(prefix.endsWith('Map')) {
        const indexClose = type.lastIndexOf('>');
        const indexComma = type.indexOf(',');
        return new ParamType('map', typeDefinitionFor(type.substring(indexComma + 2, indexClose)))
      } else if(prefix.endsWith('List')) {
        const indexOpen = type.indexOf('List<');
        const indexClose = type.lastIndexOf('>');
        return new ParamType('array', typeDefinitionFor(type.substring(indexOpen + 'List<'.length, indexClose)));
      }
      else if(prefix.endsWith('Value')) {
        const indexOpen = type.indexOf('io.kloudformation.Value<');
        const indexClose = type.lastIndexOf('>');
        return new ParamType('Value', typeDefinitionFor(type.substring(indexOpen + 'io.kloudformation.Value<'.length, indexClose)), 'kloudformation')
      }
    }
    else if (type.includes('::')) {
      const postFix = type.replace(/::/g, '.').split('.');
      const typeName = postFix.pop()! + (resource ? '' : 'Props');
      const location = postFix.map(it => it.toLowerCase()).join('.');
      return { typeName, location };
    }
  }
  return { typeName: type };
}
