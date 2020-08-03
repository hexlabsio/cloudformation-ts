import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function linkAssociation(linkAssociationProps: LinkAssociation): LinkAssociation { return ({ ...linkAssociationProps, _logicalType: '' }) }
  
export interface LinkAssociation extends KloudResource {
  globalNetworkId: Value<string>
  deviceId: Value<string>
  linkId: Value<string>
}