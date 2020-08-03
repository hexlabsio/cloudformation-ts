import { Value } from '../../../kloudformation/Value';
import { TagFilterProps } from './TagFilterProps';

export interface ApplicationSourceProps {
  cloudFormationStackARN?: Value<string>
  tagFilters?: TagFilterProps[]
}