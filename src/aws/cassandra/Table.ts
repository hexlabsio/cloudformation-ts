import { Value } from '../../kloudformation/Value';
import { ColumnProps } from './table/ColumnProps';
import { ClusteringKeyColumnProps } from './table/ClusteringKeyColumnProps';
import { BillingModeProps } from './table/BillingModeProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function table(tableProps: Table): Table { return ({ ...tableProps, _logicalType: '' }) }
  
export interface Table extends KloudResource {
  keyspaceName: Value<string>
  tableName?: Value<string>
  regularColumns?: ColumnProps[]
  partitionKeyColumns: ColumnProps[]
  clusteringKeyColumns?: ClusteringKeyColumnProps[]
  billingMode?: BillingModeProps
}