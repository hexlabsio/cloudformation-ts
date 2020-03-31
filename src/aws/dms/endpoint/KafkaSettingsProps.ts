import { Value } from '../../../kloudformation/Value';

export function kafkaSettingsProps(kafkaSettingsPropsProps: KafkaSettingsProps): KafkaSettingsProps { return (kafkaSettingsPropsProps) }

export interface KafkaSettingsProps {
    broker?: Value<string>;
    topic?: Value<string>;
}