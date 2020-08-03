import { Value } from '../../../kloudformation/Value';
import { PayloadProps } from './PayloadProps';

export interface SnsProps {
  targetArn?: Value<string>
  payload?: PayloadProps
}