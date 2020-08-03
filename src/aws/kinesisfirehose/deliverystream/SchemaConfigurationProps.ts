import { Value } from '../../../kloudformation/Value';

export interface SchemaConfigurationProps {
  catalogId?: Value<string>
  databaseName?: Value<string>
  region?: Value<string>
  roleARN?: Value<string>
  tableName?: Value<string>
  versionId?: Value<string>
}