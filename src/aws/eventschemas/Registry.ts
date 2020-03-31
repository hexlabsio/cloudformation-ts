import { Value } from '../../kloudformation/Value';
import { TagsEntryProps } from './registry/TagsEntryProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type RegistryAttributes = { RegistryName: Attribute<string>; RegistryArn: Attribute<string> }
export function registry(registryProps: Registry): Registry & { attributes: RegistryAttributes } { return ({ ...registryProps, _logicalType: 'AWS::EventSchemas::Registry', attributes: { RegistryName: 'RegistryName', RegistryArn: 'RegistryArn' } }) }

export interface Registry extends KloudResource {
    description?: Value<string>;
    registryName?: Value<string>;
    tags?: TagsEntryProps[];
}