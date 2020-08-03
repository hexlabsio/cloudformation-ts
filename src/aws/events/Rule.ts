import { Value } from '../../kloudformation/Value';
import { TargetProps } from './rule/TargetProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type RuleAttributes = { Arn: Attribute<string> }
export function rule(ruleProps: Rule): Rule & {attributes: RuleAttributes} { return ({ ...ruleProps, _logicalType: 'AWS::Events::Rule', attributes: { Arn: 'Arn' } }) }
   
export interface Rule extends KloudResource {
  description?: Value<string>
  eventBusName?: Value<string>
  eventPattern?: Value<any>
  name?: Value<string>
  roleArn?: Value<string>
  scheduleExpression?: Value<string>
  state?: Value<string>
  targets?: TargetProps[]
}