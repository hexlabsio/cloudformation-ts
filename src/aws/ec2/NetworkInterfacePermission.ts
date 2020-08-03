import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function networkInterfacePermission(networkInterfacePermissionProps: NetworkInterfacePermission): NetworkInterfacePermission { return ({ ...networkInterfacePermissionProps, _logicalType: '' }) }
  
export interface NetworkInterfacePermission extends KloudResource {
  awsAccountId: Value<string>
  networkInterfaceId: Value<string>
  permission: Value<string>
}