import { Value } from '../../kloudformation/Value';
import { TagsEntryProps } from './registry/TagsEntryProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function registry(registryProps: Registry & { logicalName?: string }): Registry { return ({ ...registryProps, _logicalType: 'AWS::EventSchemas::Registry' }) as unknown as Registry }

export interface Registry extends KloudResource {
    description?: Value<string>;
    registryName?: Value<string>;
    tags?: TagsEntryProps[];
}