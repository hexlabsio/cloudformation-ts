import { Value } from '../../kloudformation/Value';
import { TagsEntryProps } from './schema/TagsEntryProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type SchemaAttributes = { SchemaVersion: Attribute<string>;SchemaArn: Attribute<string>;SchemaName: Attribute<string> }
export function schema(schemaProps: Schema): Schema & {attributes: SchemaAttributes} { return ({ ...schemaProps, _logicalType: 'AWS::EventSchemas::Schema', attributes: { SchemaVersion: 'SchemaVersion',SchemaArn: 'SchemaArn',SchemaName: 'SchemaName' } }) }
   
export interface Schema extends KloudResource {
  type: Value<string>
  description?: Value<string>
  content: Value<string>
  registryName: Value<string>
  schemaName?: Value<string>
  tags?: TagsEntryProps[]
}