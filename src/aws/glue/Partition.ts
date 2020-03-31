import { Value } from '../../kloudformation/Value';
import { PartitionInputProps } from './partition/PartitionInputProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type PartitionAttributes = {  }
export function partition(partitionProps: Partition): Partition & { attributes: PartitionAttributes } { return ({ ...partitionProps, _logicalType: 'AWS::Glue::Partition', attributes: {  } }) }

export interface Partition extends KloudResource {
    tableName: Value<string>;
    databaseName: Value<string>;
    catalogId: Value<string>;
    partitionInput: PartitionInputProps;
}