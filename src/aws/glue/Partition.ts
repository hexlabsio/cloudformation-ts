import { Value } from '../../kloudformation/Value';
import { PartitionInputProps } from './partition/PartitionInputProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function partition(partitionProps: Partition): Partition { return ({ ...partitionProps, _logicalType: '' }) }
  
export interface Partition extends KloudResource {
  tableName: Value<string>
  databaseName: Value<string>
  catalogId: Value<string>
  partitionInput: PartitionInputProps
}