import { Value } from '../../kloudformation/Value';
import { TagsEntryProps } from './discoverer/TagsEntryProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type DiscovererAttributes = { DiscovererArn: Attribute<string>; DiscovererId: Attribute<string> }
export function discoverer(discovererProps: Discoverer): Discoverer & { attributes: DiscovererAttributes } { return ({ ...discovererProps, _logicalType: 'AWS::EventSchemas::Discoverer', attributes: { DiscovererArn: 'DiscovererArn', DiscovererId: 'DiscovererId' } }) }

export interface Discoverer extends KloudResource {
    sourceArn: Value<string>;
    description?: Value<string>;
    tags?: TagsEntryProps[];
}