import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function clientVpnTargetNetworkAssociation(clientVpnTargetNetworkAssociationProps: ClientVpnTargetNetworkAssociation & { logicalName?: string }): ClientVpnTargetNetworkAssociation { return ({ ...clientVpnTargetNetworkAssociationProps, _logicalType: 'AWS::EC2::ClientVpnTargetNetworkAssociation' }) as unknown as ClientVpnTargetNetworkAssociation }

export interface ClientVpnTargetNetworkAssociation extends KloudResource {
    clientVpnEndpointId: Value<string>;
    subnetId: Value<string>;
}