import { Value } from '../../../kloudformation/Value';
import { PayloadProps } from './PayloadProps';

export interface DynamoDBv2Props {
  tableName?: Value<string>
  payload?: PayloadProps
}