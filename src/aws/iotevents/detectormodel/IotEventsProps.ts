import { Value } from '../../../kloudformation/Value';
import { PayloadProps } from './PayloadProps';

export interface IotEventsProps {
  inputName?: Value<string>
  payload?: PayloadProps
}