import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function clientVpnAuthorizationRule(clientVpnAuthorizationRuleProps: ClientVpnAuthorizationRule & { logicalName?: string }): ClientVpnAuthorizationRule { return ({ ...clientVpnAuthorizationRuleProps, _logicalType: 'AWS::EC2::ClientVpnAuthorizationRule' }) as unknown as ClientVpnAuthorizationRule }

export interface ClientVpnAuthorizationRule extends KloudResource {
    clientVpnEndpointId: Value<string>;
    targetNetworkCidr: Value<string>;
    description?: Value<string>;
    accessGroupId?: Value<string>;
    authorizeAllGroups?: Value<boolean>;
}