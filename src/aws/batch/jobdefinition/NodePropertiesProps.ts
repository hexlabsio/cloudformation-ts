import { Value } from '../../../kloudformation/Value';
import { NodeRangePropertyProps } from './NodeRangePropertyProps';

export interface NodePropertiesProps {
  mainNode: Value<number>
  nodeRangeProperties: NodeRangePropertyProps[]
  numNodes: Value<number>
}