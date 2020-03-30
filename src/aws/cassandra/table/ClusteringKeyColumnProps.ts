import { ColumnProps } from './ColumnProps';
import { Value } from '../../../kloudformation/Value';

export function clusteringKeyColumnProps(clusteringKeyColumnPropsProps: ClusteringKeyColumnProps): ClusteringKeyColumnProps { return (clusteringKeyColumnPropsProps) as unknown as ClusteringKeyColumnProps }

export interface ClusteringKeyColumnProps {
    column: ColumnProps;
    orderBy?: Value<string>;
}