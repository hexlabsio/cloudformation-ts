import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VPCEndpointConnectionNotificationAttributes = {  }
export function vPCEndpointConnectionNotification(vPCEndpointConnectionNotificationProps: VPCEndpointConnectionNotification): VPCEndpointConnectionNotification & { attributes: VPCEndpointConnectionNotificationAttributes } { return ({ ...vPCEndpointConnectionNotificationProps, _logicalType: 'AWS::EC2::VPCEndpointConnectionNotification', attributes: {  } }) }

export interface VPCEndpointConnectionNotification extends KloudResource {
    connectionEvents: Value<Value<string>[]>;
    connectionNotificationArn: Value<string>;
    vPCEndpointId?: Value<string>;
    serviceId?: Value<string>;
}