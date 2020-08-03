import { Value } from '../../../kloudformation/Value';
import { PayloadProps } from './PayloadProps';

export interface IotTopicPublishProps {
  mqttTopic?: Value<string>
  payload?: PayloadProps
}