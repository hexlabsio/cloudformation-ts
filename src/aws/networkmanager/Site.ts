import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { LocationProps } from './site/LocationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function site(siteProps: Site & { logicalName?: string }): Site { return ({ ...siteProps, _logicalType: 'AWS::NetworkManager::Site' }) as unknown as Site }

export interface Site extends KloudResource {
    globalNetworkId: Value<string>;
    description?: Value<string>;
    tags?: Tag[];
    location?: LocationProps;
}