import { Value } from '../../../kloudformation/Value';
import { DeltaSyncConfigProps } from './DeltaSyncConfigProps';

export interface DynamoDBConfigProps {
  tableName: Value<string>
  awsRegion: Value<string>
  versioned?: Value<boolean>
  deltaSyncConfig?: DeltaSyncConfigProps
  useCallerCredentials?: Value<boolean>
}