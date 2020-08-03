import { Value } from '../../../kloudformation/Value';
import { PayloadProps } from './PayloadProps';

export interface DynamoDBProps {
  tableName?: Value<string>
  payloadField?: Value<string>
  rangeKeyField?: Value<string>
  hashKeyField?: Value<string>
  rangeKeyValue?: Value<string>
  rangeKeyType?: Value<string>
  hashKeyType?: Value<string>
  hashKeyValue?: Value<string>
  payload?: PayloadProps
  operation?: Value<string>
}