import { Value } from '../../../kloudformation/Value';

export interface KafkaSettingsProps {
  broker?: Value<string>
  topic?: Value<string>
}