import { Value } from '../../../kloudformation/Value';

export interface RdsHttpEndpointConfigProps {
  awsRegion: Value<string>
  schema?: Value<string>
  databaseName?: Value<string>
  dbClusterIdentifier: Value<string>
  awsSecretStoreArn: Value<string>
}