import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function clientVpnAuthorizationRule(clientVpnAuthorizationRuleProps: ClientVpnAuthorizationRule): ClientVpnAuthorizationRule { return ({ ...clientVpnAuthorizationRuleProps, _logicalType: '' }) }
  
export interface ClientVpnAuthorizationRule extends KloudResource {
  clientVpnEndpointId: Value<string>
  description?: Value<string>
  accessGroupId?: Value<string>
  targetNetworkCidr: Value<string>
  authorizeAllGroups?: Value<boolean>
}