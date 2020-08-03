import { Value } from '../../../kloudformation/Value';
import { PayloadProps } from './PayloadProps';

export interface FirehoseProps {
  deliveryStreamName?: Value<string>
  payload?: PayloadProps
  separator?: Value<string>
}