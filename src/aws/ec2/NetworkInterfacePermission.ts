import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type NetworkInterfacePermissionAttributes = {  }
export function networkInterfacePermission(networkInterfacePermissionProps: NetworkInterfacePermission): NetworkInterfacePermission & { attributes: NetworkInterfacePermissionAttributes } { return ({ ...networkInterfacePermissionProps, _logicalType: 'AWS::EC2::NetworkInterfacePermission', attributes: {  } }) }

export interface NetworkInterfacePermission extends KloudResource {
    awsAccountId: Value<string>;
    networkInterfaceId: Value<string>;
    permission: Value<string>;
}