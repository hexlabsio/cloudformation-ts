import { Tag } from '../../Tag';
import { CreateRuleProps } from './CreateRuleProps';
import { FastRestoreRuleProps } from './FastRestoreRuleProps';
import { RetainRuleProps } from './RetainRuleProps';
import { CrossRegionCopyRuleProps } from './CrossRegionCopyRuleProps';
import { Value } from '../../../kloudformation/Value';

export function scheduleProps(schedulePropsProps: ScheduleProps): ScheduleProps { return (schedulePropsProps) }

export interface ScheduleProps {
    tagsToAdd?: Tag[];
    createRule?: CreateRuleProps;
    variableTags?: Tag[];
    fastRestoreRule?: FastRestoreRuleProps;
    retainRule?: RetainRuleProps;
    crossRegionCopyRules?: CrossRegionCopyRuleProps[];
    name?: Value<string>;
    copyTags?: Value<boolean>;
}