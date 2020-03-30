import { Value } from '../../kloudformation/Value';
import { TagsEntryProps } from './schema/TagsEntryProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function schema(schemaProps: Schema & { logicalName?: string }): Schema { return ({ ...schemaProps, _logicalType: 'AWS::EventSchemas::Schema' }) as unknown as Schema }

export interface Schema extends KloudResource {
    type: Value<string>;
    content: Value<string>;
    registryName: Value<string>;
    description?: Value<string>;
    schemaName?: Value<string>;
    tags?: TagsEntryProps[];
}