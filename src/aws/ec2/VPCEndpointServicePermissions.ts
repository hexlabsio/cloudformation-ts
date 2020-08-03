import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function vPCEndpointServicePermissions(vPCEndpointServicePermissionsProps: VPCEndpointServicePermissions): VPCEndpointServicePermissions { return ({ ...vPCEndpointServicePermissionsProps, _logicalType: '' }) }
  
export interface VPCEndpointServicePermissions extends KloudResource {
  allowedPrincipals?: Value<Value<string>[]>
  serviceId: Value<string>
}