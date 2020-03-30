import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function vPCEndpointServicePermissions(vPCEndpointServicePermissionsProps: VPCEndpointServicePermissions & { logicalName?: string }): VPCEndpointServicePermissions { return ({ ...vPCEndpointServicePermissionsProps, _logicalType: 'AWS::EC2::VPCEndpointServicePermissions' }) as unknown as VPCEndpointServicePermissions }

export interface VPCEndpointServicePermissions extends KloudResource {
    serviceId: Value<string>;
    allowedPrincipals?: Value<Value<string>[]>;
}