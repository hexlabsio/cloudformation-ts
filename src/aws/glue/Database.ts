import { DatabaseInputProps } from './database/DatabaseInputProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function database(databaseProps: Database): Database { return ({ ...databaseProps, _logicalType: '' }) }
  
export interface Database extends KloudResource {
  databaseInput: DatabaseInputProps
  catalogId: Value<string>
}