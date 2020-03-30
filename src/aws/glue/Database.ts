import { DatabaseInputProps } from './database/DatabaseInputProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function database(databaseProps: Database & { logicalName?: string }): Database { return ({ ...databaseProps, _logicalType: 'AWS::Glue::Database' }) as unknown as Database }

export interface Database extends KloudResource {
    databaseInput: DatabaseInputProps;
    catalogId: Value<string>;
}