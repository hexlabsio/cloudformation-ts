import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function vPCEndpointConnectionNotification(vPCEndpointConnectionNotificationProps: VPCEndpointConnectionNotification & { logicalName?: string }): VPCEndpointConnectionNotification { return ({ ...vPCEndpointConnectionNotificationProps, _logicalType: 'AWS::EC2::VPCEndpointConnectionNotification' }) as unknown as VPCEndpointConnectionNotification }

export interface VPCEndpointConnectionNotification extends KloudResource {
    connectionEvents: Value<Value<string>[]>;
    connectionNotificationArn: Value<string>;
    vPCEndpointId?: Value<string>;
    serviceId?: Value<string>;
}