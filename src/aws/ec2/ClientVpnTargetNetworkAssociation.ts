import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ClientVpnTargetNetworkAssociationAttributes = {  }
export function clientVpnTargetNetworkAssociation(clientVpnTargetNetworkAssociationProps: ClientVpnTargetNetworkAssociation): ClientVpnTargetNetworkAssociation & { attributes: ClientVpnTargetNetworkAssociationAttributes } { return ({ ...clientVpnTargetNetworkAssociationProps, _logicalType: 'AWS::EC2::ClientVpnTargetNetworkAssociation', attributes: {  } }) }

export interface ClientVpnTargetNetworkAssociation extends KloudResource {
    clientVpnEndpointId: Value<string>;
    subnetId: Value<string>;
}