import { TableInputProps } from './table/TableInputProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function table(tableProps: Table & { logicalName?: string }): Table { return ({ ...tableProps, _logicalType: 'AWS::Glue::Table' }) as unknown as Table }

export interface Table extends KloudResource {
    tableInput: TableInputProps;
    databaseName: Value<string>;
    catalogId: Value<string>;
}