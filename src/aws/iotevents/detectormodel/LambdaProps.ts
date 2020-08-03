import { Value } from '../../../kloudformation/Value';
import { PayloadProps } from './PayloadProps';

export interface LambdaProps {
  functionArn?: Value<string>
  payload?: PayloadProps
}