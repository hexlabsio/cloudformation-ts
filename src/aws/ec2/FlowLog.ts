import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function flowLog(flowLogProps: FlowLog & { logicalName?: string }): FlowLog { return ({ ...flowLogProps, _logicalType: 'AWS::EC2::FlowLog' }) as unknown as FlowLog }

export interface FlowLog extends KloudResource {
    resourceId: Value<string>;
    resourceType: Value<string>;
    trafficType: Value<string>;
    deliverLogsPermissionArn?: Value<string>;
    logDestination?: Value<string>;
    logDestinationType?: Value<string>;
    logGroupName?: Value<string>;
}