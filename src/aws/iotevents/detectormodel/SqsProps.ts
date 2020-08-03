import { Value } from '../../../kloudformation/Value';
import { PayloadProps } from './PayloadProps';

export interface SqsProps {
  useBase64?: Value<boolean>
  payload?: PayloadProps
  queueUrl?: Value<string>
}