import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type QueueAttributes = { Arn: Attribute<string>;Name: Attribute<string> }
export function queue(queueProps: Queue): Queue & {attributes: QueueAttributes} { return ({ ...queueProps, _logicalType: 'AWS::MediaConvert::Queue', attributes: { Arn: 'Arn',Name: 'Name' } }) }
   
export interface Queue extends KloudResource {
  status?: Value<string>
  description?: Value<string>
  pricingPlan?: Value<string>
  tags?: Value<any>
  name?: Value<string>
}