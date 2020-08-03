import { ContainerPropertiesProps } from './ContainerPropertiesProps';
import { Value } from '../../../kloudformation/Value';

export interface NodeRangePropertyProps {
  container?: ContainerPropertiesProps
  targetNodes: Value<string>
}