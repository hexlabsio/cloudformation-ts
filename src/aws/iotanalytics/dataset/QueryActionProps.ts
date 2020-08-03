import { FilterProps } from './FilterProps';
import { Value } from '../../../kloudformation/Value';

export interface QueryActionProps {
  filters?: FilterProps[]
  sqlQuery: Value<string>
}