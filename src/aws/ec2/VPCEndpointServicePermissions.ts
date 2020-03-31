import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VPCEndpointServicePermissionsAttributes = {  }
export function vPCEndpointServicePermissions(vPCEndpointServicePermissionsProps: VPCEndpointServicePermissions): VPCEndpointServicePermissions & { attributes: VPCEndpointServicePermissionsAttributes } { return ({ ...vPCEndpointServicePermissionsProps, _logicalType: 'AWS::EC2::VPCEndpointServicePermissions', attributes: {  } }) }

export interface VPCEndpointServicePermissions extends KloudResource {
    serviceId: Value<string>;
    allowedPrincipals?: Value<Value<string>[]>;
}