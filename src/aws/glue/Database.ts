import { DatabaseInputProps } from './database/DatabaseInputProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DatabaseAttributes = {  }
export function database(databaseProps: Database): Database & { attributes: DatabaseAttributes } { return ({ ...databaseProps, _logicalType: 'AWS::Glue::Database', attributes: {  } }) }

export interface Database extends KloudResource {
    databaseInput: DatabaseInputProps;
    catalogId: Value<string>;
}