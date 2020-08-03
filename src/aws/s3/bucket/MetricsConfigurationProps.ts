import { Value } from '../../../kloudformation/Value';
import { TagFilterProps } from './TagFilterProps';

export interface MetricsConfigurationProps {
  id: Value<string>
  prefix?: Value<string>
  tagFilters?: TagFilterProps[]
}