import { PutItemInputProps } from './PutItemInputProps';
import { Value } from '../../../kloudformation/Value';

export interface DynamoDBv2ActionProps {
  putItem?: PutItemInputProps
  roleArn?: Value<string>
}