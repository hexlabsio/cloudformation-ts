import { Value } from '../../kloudformation/Value';
import { TagsEntryProps } from './discoverer/TagsEntryProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DiscovererAttributes = { DiscovererArn: Attribute<string>;DiscovererId: Attribute<string> }
export function discoverer(discovererProps: Discoverer): Discoverer & {attributes: DiscovererAttributes} { return ({ ...discovererProps, _logicalType: 'AWS::EventSchemas::Discoverer', attributes: { DiscovererArn: 'DiscovererArn',DiscovererId: 'DiscovererId' } }) }
   
export interface Discoverer extends KloudResource {
  description?: Value<string>
  sourceArn: Value<string>
  tags?: TagsEntryProps[]
}