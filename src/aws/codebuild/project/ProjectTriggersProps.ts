import { FilterGroupProps } from './FilterGroupProps';
import { Value } from '../../../kloudformation/Value';

export interface ProjectTriggersProps {
  filterGroups?: FilterGroupProps[]
  webhook?: Value<boolean>
}