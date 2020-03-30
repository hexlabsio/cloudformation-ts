import { Value } from '../../kloudformation/Value';
import { TagsEntryProps } from './configuration/TagsEntryProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function configuration(configurationProps: Configuration & { logicalName?: string }): Configuration { return ({ ...configurationProps, _logicalType: 'AWS::AmazonMQ::Configuration' }) as unknown as Configuration }

export interface Configuration extends KloudResource {
    engineVersion: Value<string>;
    engineType: Value<string>;
    data: Value<string>;
    name: Value<string>;
    description?: Value<string>;
    tags?: TagsEntryProps[];
}