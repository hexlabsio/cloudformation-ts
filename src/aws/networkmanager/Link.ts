import { Value } from '../../kloudformation/Value';
import { BandwidthProps } from './link/BandwidthProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type LinkAttributes = { LinkArn: Attribute<string>; LinkId: Attribute<string> }
export function link(linkProps: Link): Link & { attributes: LinkAttributes } { return ({ ...linkProps, _logicalType: 'AWS::NetworkManager::Link', attributes: { LinkArn: 'LinkArn', LinkId: 'LinkId' } }) }

export interface Link extends KloudResource {
    globalNetworkId: Value<string>;
    siteId: Value<string>;
    bandwidth: BandwidthProps;
    provider?: Value<string>;
    description?: Value<string>;
    tags?: Tag[];
    type?: Value<string>;
}