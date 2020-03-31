import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ClientVpnAuthorizationRuleAttributes = {  }
export function clientVpnAuthorizationRule(clientVpnAuthorizationRuleProps: ClientVpnAuthorizationRule): ClientVpnAuthorizationRule & { attributes: ClientVpnAuthorizationRuleAttributes } { return ({ ...clientVpnAuthorizationRuleProps, _logicalType: 'AWS::EC2::ClientVpnAuthorizationRule', attributes: {  } }) }

export interface ClientVpnAuthorizationRule extends KloudResource {
    clientVpnEndpointId: Value<string>;
    targetNetworkCidr: Value<string>;
    description?: Value<string>;
    accessGroupId?: Value<string>;
    authorizeAllGroups?: Value<boolean>;
}