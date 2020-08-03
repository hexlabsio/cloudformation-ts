import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type FlowLogAttributes = { Id: Attribute<string> }
export function flowLog(flowLogProps: FlowLog): FlowLog & {attributes: FlowLogAttributes} { return ({ ...flowLogProps, _logicalType: 'AWS::EC2::FlowLog', attributes: { Id: 'Id' } }) }
   
export interface FlowLog extends KloudResource {
  deliverLogsPermissionArn?: Value<string>
  logDestination?: Value<string>
  logDestinationType?: Value<string>
  logFormat?: Value<string>
  logGroupName?: Value<string>
  maxAggregationInterval?: Value<number>
  resourceId: Value<string>
  resourceType: Value<string>
  tags?: Tag[]
  trafficType: Value<string>
}