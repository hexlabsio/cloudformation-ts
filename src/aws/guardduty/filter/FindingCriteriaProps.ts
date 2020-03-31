import { Value } from '../../../kloudformation/Value';
import { ConditionProps } from './ConditionProps';

export function findingCriteriaProps(findingCriteriaPropsProps: FindingCriteriaProps): FindingCriteriaProps { return (findingCriteriaPropsProps) }

export interface FindingCriteriaProps {
    criterion?: Value<any>;
    itemType?: ConditionProps;
}