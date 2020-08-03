import { Value } from '../../../kloudformation/Value';

export interface GlueTablesProps {
  connectionName?: Value<string>
  tableName: Value<string>
  databaseName: Value<string>
  catalogId?: Value<string>
}