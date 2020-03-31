import { Value } from '../../../kloudformation/Value';

export function dataflowEdgeProps(dataflowEdgePropsProps: DataflowEdgeProps): DataflowEdgeProps { return (dataflowEdgePropsProps) }

export interface DataflowEdgeProps {
    source?: Value<string>;
    destination?: Value<string>;
}