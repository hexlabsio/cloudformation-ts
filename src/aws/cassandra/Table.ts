import { Value } from '../../kloudformation/Value';
import { ColumnProps } from '../glue/table/ColumnProps';
import { ClusteringKeyColumnProps } from './table/ClusteringKeyColumnProps';
import { BillingModeProps } from './table/BillingModeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TableAttributes = {  }
export function table(tableProps: Table): Table & { attributes: TableAttributes } { return ({ ...tableProps, _logicalType: 'AWS::Cassandra::Table', attributes: {  } }) }

export interface Table extends KloudResource {
    keyspaceName: Value<string>;
    partitionKeyColumns: ColumnProps[];
    tableName?: Value<string>;
    regularColumns?: ColumnProps[];
    clusteringKeyColumns?: ClusteringKeyColumnProps[];
    billingMode?: BillingModeProps;
}