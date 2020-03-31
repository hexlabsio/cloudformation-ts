import { Value } from '../../../kloudformation/Value';
import { ContainerPropertiesProps } from './ContainerPropertiesProps';

export function nodeRangePropertyProps(nodeRangePropertyPropsProps: NodeRangePropertyProps): NodeRangePropertyProps { return (nodeRangePropertyPropsProps) }

export interface NodeRangePropertyProps {
    targetNodes: Value<string>;
    container?: ContainerPropertiesProps;
}