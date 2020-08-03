import { ResourceDataContainerProps } from './ResourceDataContainerProps';
import { Value } from '../../../kloudformation/Value';

export interface ResourceInstanceProps {
  resourceDataContainer: ResourceDataContainerProps
  id: Value<string>
  name: Value<string>
}