import { Value } from '../../kloudformation/Value';
import { RuleProps } from './ruleGroup/RuleProps';
import { VisibilityConfigProps } from './ruleGroup/VisibilityConfigProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type RuleGroupAttributes = { Arn: Attribute<string>;Id: Attribute<string> }
export function ruleGroup(ruleGroupProps: RuleGroup): RuleGroup & {attributes: RuleGroupAttributes} { return ({ ...ruleGroupProps, _logicalType: 'AWS::WAFv2::RuleGroup', attributes: { Arn: 'Arn',Id: 'Id' } }) }
   
export interface RuleGroup extends KloudResource {
  capacity: Value<number>
  description?: Value<string>
  name?: Value<string>
  scope: Value<string>
  rules?: RuleProps[]
  visibilityConfig: VisibilityConfigProps
  tags?: Tag[]
}