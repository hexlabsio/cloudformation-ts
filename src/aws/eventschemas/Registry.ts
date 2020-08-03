import { Value } from '../../kloudformation/Value';
import { TagsEntryProps } from './registry/TagsEntryProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type RegistryAttributes = { RegistryName: Attribute<string>;RegistryArn: Attribute<string> }
export function registry(registryProps: Registry): Registry & {attributes: RegistryAttributes} { return ({ ...registryProps, _logicalType: 'AWS::EventSchemas::Registry', attributes: { RegistryName: 'RegistryName',RegistryArn: 'RegistryArn' } }) }
   
export interface Registry extends KloudResource {
  description?: Value<string>
  registryName?: Value<string>
  tags?: TagsEntryProps[]
}