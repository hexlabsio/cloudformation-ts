import { Value } from '../../../kloudformation/Value';
import { ConditionProps } from './ConditionProps';

export interface FindingCriteriaProps {
  criterion?: Value<any>
  itemType?: ConditionProps
}