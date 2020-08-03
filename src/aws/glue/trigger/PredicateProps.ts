import { Value } from '../../../kloudformation/Value';
import { ConditionProps } from './ConditionProps';

export interface PredicateProps {
  logical?: Value<string>
  conditions?: ConditionProps[]
}