import { FilterProps } from './FilterProps';
import { Value } from '../../../kloudformation/Value';

export interface ArchiveRuleProps {
  filter: FilterProps[]
  ruleName: Value<string>
}