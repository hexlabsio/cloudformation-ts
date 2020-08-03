import { TableInputProps } from './table/TableInputProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function table(tableProps: Table): Table { return ({ ...tableProps, _logicalType: '' }) }
  
export interface Table extends KloudResource {
  tableInput: TableInputProps
  databaseName: Value<string>
  catalogId: Value<string>
}