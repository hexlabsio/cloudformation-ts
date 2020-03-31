import { ColumnProps } from '../../glue/table/ColumnProps';
import { Value } from '../../../kloudformation/Value';

export function clusteringKeyColumnProps(clusteringKeyColumnPropsProps: ClusteringKeyColumnProps): ClusteringKeyColumnProps { return (clusteringKeyColumnPropsProps) }

export interface ClusteringKeyColumnProps {
    column: ColumnProps;
    orderBy?: Value<string>;
}