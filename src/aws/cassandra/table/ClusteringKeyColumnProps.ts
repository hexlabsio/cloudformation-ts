import { ColumnProps } from './ColumnProps';
import { Value } from '../../../kloudformation/Value';

export interface ClusteringKeyColumnProps {
  column: ColumnProps
  orderBy?: Value<string>
}