import { Value } from '../../kloudformation/Value';
import { VisibilityConfigProps } from './rulegroup/VisibilityConfigProps';
import { RuleProps } from './rulegroup/RuleProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function ruleGroup(ruleGroupProps: RuleGroup & { logicalName?: string }): RuleGroup { return ({ ...ruleGroupProps, _logicalType: 'AWS::WAFv2::RuleGroup' }) as unknown as RuleGroup }

export interface RuleGroup extends KloudResource {
    capacity: Value<number>;
    scope: Value<string>;
    visibilityConfig: VisibilityConfigProps;
    description?: Value<string>;
    name?: Value<string>;
    rules?: RuleProps[];
    tags?: Tag[];
}