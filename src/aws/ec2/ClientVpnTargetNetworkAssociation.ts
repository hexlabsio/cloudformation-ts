import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function clientVpnTargetNetworkAssociation(clientVpnTargetNetworkAssociationProps: ClientVpnTargetNetworkAssociation): ClientVpnTargetNetworkAssociation { return ({ ...clientVpnTargetNetworkAssociationProps, _logicalType: '' }) }
  
export interface ClientVpnTargetNetworkAssociation extends KloudResource {
  clientVpnEndpointId: Value<string>
  subnetId: Value<string>
}