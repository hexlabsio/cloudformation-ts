import { Value } from '../../kloudformation/Value';
import { TagsEntryProps } from './schema/TagsEntryProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type SchemaAttributes = { SchemaVersion: Attribute<string>; SchemaArn: Attribute<string>; SchemaName: Attribute<string> }
export function schema(schemaProps: Schema): Schema & { attributes: SchemaAttributes } { return ({ ...schemaProps, _logicalType: 'AWS::EventSchemas::Schema', attributes: { SchemaVersion: 'SchemaVersion', SchemaArn: 'SchemaArn', SchemaName: 'SchemaName' } }) }

export interface Schema extends KloudResource {
    type: Value<string>;
    content: Value<string>;
    registryName: Value<string>;
    description?: Value<string>;
    schemaName?: Value<string>;
    tags?: TagsEntryProps[];
}