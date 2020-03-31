import { TableInputProps } from './table/TableInputProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TableAttributes = {  }
export function table(tableProps: Table): Table & { attributes: TableAttributes } { return ({ ...tableProps, _logicalType: 'AWS::Glue::Table', attributes: {  } }) }

export interface Table extends KloudResource {
    tableInput: TableInputProps;
    databaseName: Value<string>;
    catalogId: Value<string>;
}