import { DataResourceProps } from './DataResourceProps';
import { Value } from '../../../kloudformation/Value';

export interface EventSelectorProps {
  dataResources?: DataResourceProps[]
  includeManagementEvents?: Value<boolean>
  readWriteType?: Value<string>
}