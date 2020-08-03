import { Value } from '../../../kloudformation/Value';

export interface DynamoDBActionProps {
  hashKeyField: Value<string>
  hashKeyType?: Value<string>
  hashKeyValue: Value<string>
  payloadField?: Value<string>
  rangeKeyField?: Value<string>
  rangeKeyType?: Value<string>
  rangeKeyValue?: Value<string>
  roleArn: Value<string>
  tableName: Value<string>
}