import { Value } from '../../../kloudformation/Value';
import { ConditionProps } from './ConditionProps';

export function findingCriteriaProps(findingCriteriaPropsProps: FindingCriteriaProps): FindingCriteriaProps { return (findingCriteriaPropsProps) as unknown as FindingCriteriaProps }

export interface FindingCriteriaProps {
    criterion?: Value<any>;
    itemType?: ConditionProps;
}