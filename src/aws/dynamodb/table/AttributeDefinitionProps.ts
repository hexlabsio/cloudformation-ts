import { Value } from '../../../kloudformation/Value';

export interface AttributeDefinitionProps {
  attributeName: Value<string>
  attributeType: Value<string>
}