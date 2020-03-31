import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type FlowLogAttributes = {  }
export function flowLog(flowLogProps: FlowLog): FlowLog & { attributes: FlowLogAttributes } { return ({ ...flowLogProps, _logicalType: 'AWS::EC2::FlowLog', attributes: {  } }) }

export interface FlowLog extends KloudResource {
    resourceId: Value<string>;
    resourceType: Value<string>;
    trafficType: Value<string>;
    deliverLogsPermissionArn?: Value<string>;
    logDestination?: Value<string>;
    logDestinationType?: Value<string>;
    logGroupName?: Value<string>;
}