import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { LocationProps } from './site/LocationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type SiteAttributes = { SiteArn: Attribute<string>;SiteId: Attribute<string> }
export function site(siteProps: Site): Site & {attributes: SiteAttributes} { return ({ ...siteProps, _logicalType: 'AWS::NetworkManager::Site', attributes: { SiteArn: 'SiteArn',SiteId: 'SiteId' } }) }
   
export interface Site extends KloudResource {
  description?: Value<string>
  tags?: Tag[]
  globalNetworkId: Value<string>
  location?: LocationProps
}