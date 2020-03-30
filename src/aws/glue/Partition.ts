import { Value } from '../../kloudformation/Value';
import { PartitionInputProps } from './partition/PartitionInputProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function partition(partitionProps: Partition & { logicalName?: string }): Partition { return ({ ...partitionProps, _logicalType: 'AWS::Glue::Partition' }) as unknown as Partition }

export interface Partition extends KloudResource {
    tableName: Value<string>;
    databaseName: Value<string>;
    catalogId: Value<string>;
    partitionInput: PartitionInputProps;
}