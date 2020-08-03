import { Value } from '../../../kloudformation/Value';

export interface GlueConfigurationProps {
  tableName: Value<string>
  databaseName: Value<string>
}