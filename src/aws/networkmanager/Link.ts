import { Value } from '../../kloudformation/Value';
import { BandwidthProps } from './link/BandwidthProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function link(linkProps: Link & { logicalName?: string }): Link { return ({ ...linkProps, _logicalType: 'AWS::NetworkManager::Link' }) as unknown as Link }

export interface Link extends KloudResource {
    globalNetworkId: Value<string>;
    siteId: Value<string>;
    bandwidth: BandwidthProps;
    provider?: Value<string>;
    description?: Value<string>;
    tags?: Tag[];
    type?: Value<string>;
}