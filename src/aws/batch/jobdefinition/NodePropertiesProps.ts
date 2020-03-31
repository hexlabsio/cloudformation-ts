import { Value } from '../../../kloudformation/Value';
import { NodeRangePropertyProps } from './NodeRangePropertyProps';

export function nodePropertiesProps(nodePropertiesPropsProps: NodePropertiesProps): NodePropertiesProps { return (nodePropertiesPropsProps) }

export interface NodePropertiesProps {
    mainNode: Value<number>;
    nodeRangeProperties: NodeRangePropertyProps[];
    numNodes: Value<number>;
}