import { Value } from '../../../kloudformation/Value';
import { StorageDescriptorProps } from './StorageDescriptorProps';
import { ColumnProps } from '../../cassandra/table/ColumnProps';

export function tableInputProps(tableInputPropsProps: TableInputProps): TableInputProps { return (tableInputPropsProps) as unknown as TableInputProps }

export interface TableInputProps {
    owner?: Value<string>;
    viewOriginalText?: Value<string>;
    description?: Value<string>;
    tableType?: Value<string>;
    parameters?: Value<any>;
    viewExpandedText?: Value<string>;
    storageDescriptor?: StorageDescriptorProps;
    partitionKeys?: ColumnProps[];
    retention?: Value<number>;
    name?: Value<string>;
}