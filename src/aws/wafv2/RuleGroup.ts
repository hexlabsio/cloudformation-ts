import { Value } from '../../kloudformation/Value';
import { VisibilityConfigProps } from './rulegroup/VisibilityConfigProps';
import { RuleProps } from './rulegroup/RuleProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type RuleGroupAttributes = { Arn: Attribute<string>; Id: Attribute<string> }
export function ruleGroup(ruleGroupProps: RuleGroup): RuleGroup & { attributes: RuleGroupAttributes } { return ({ ...ruleGroupProps, _logicalType: 'AWS::WAFv2::RuleGroup', attributes: { Arn: 'Arn', Id: 'Id' } }) }

export interface RuleGroup extends KloudResource {
    capacity: Value<number>;
    scope: Value<string>;
    visibilityConfig: VisibilityConfigProps;
    description?: Value<string>;
    name?: Value<string>;
    rules?: RuleProps[];
    tags?: Tag[];
}