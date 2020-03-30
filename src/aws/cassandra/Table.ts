import { Value } from '../../kloudformation/Value';
import { ColumnProps } from './table/ColumnProps';
import { ClusteringKeyColumnProps } from './table/ClusteringKeyColumnProps';
import { BillingModeProps } from './table/BillingModeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function table(tableProps: Table & { logicalName?: string }): Table { return ({ ...tableProps, _logicalType: 'AWS::Cassandra::Table' }) as unknown as Table }

export interface Table extends KloudResource {
    keyspaceName: Value<string>;
    partitionKeyColumns: ColumnProps[];
    tableName?: Value<string>;
    regularColumns?: ColumnProps[];
    clusteringKeyColumns?: ClusteringKeyColumnProps[];
    billingMode?: BillingModeProps;
}