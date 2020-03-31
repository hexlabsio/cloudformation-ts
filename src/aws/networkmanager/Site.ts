import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { LocationProps } from './site/LocationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type SiteAttributes = { SiteArn: Attribute<string>; SiteId: Attribute<string> }
export function site(siteProps: Site): Site & { attributes: SiteAttributes } { return ({ ...siteProps, _logicalType: 'AWS::NetworkManager::Site', attributes: { SiteArn: 'SiteArn', SiteId: 'SiteId' } }) }

export interface Site extends KloudResource {
    globalNetworkId: Value<string>;
    description?: Value<string>;
    tags?: Tag[];
    location?: LocationProps;
}