import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type WaitConditionAttributes = { Data: Attribute<any> }
export function waitCondition(waitConditionProps: WaitCondition): WaitCondition & {attributes: WaitConditionAttributes} { return ({ ...waitConditionProps, _logicalType: 'AWS::CloudFormation::WaitCondition', attributes: { Data: 'Data' } }) }
   
export interface WaitCondition extends KloudResource {
  count?: Value<number>
  handle?: Value<string>
  timeout?: Value<string>
}