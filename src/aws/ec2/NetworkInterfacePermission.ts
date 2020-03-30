import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function networkInterfacePermission(networkInterfacePermissionProps: NetworkInterfacePermission & { logicalName?: string }): NetworkInterfacePermission { return ({ ...networkInterfacePermissionProps, _logicalType: 'AWS::EC2::NetworkInterfacePermission' }) as unknown as NetworkInterfacePermission }

export interface NetworkInterfacePermission extends KloudResource {
    awsAccountId: Value<string>;
    networkInterfaceId: Value<string>;
    permission: Value<string>;
}