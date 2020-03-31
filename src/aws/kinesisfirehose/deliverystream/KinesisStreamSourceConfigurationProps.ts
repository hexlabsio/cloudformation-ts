import { Value } from '../../../kloudformation/Value';

export function kinesisStreamSourceConfigurationProps(kinesisStreamSourceConfigurationPropsProps: KinesisStreamSourceConfigurationProps): KinesisStreamSourceConfigurationProps { return (kinesisStreamSourceConfigurationPropsProps) }

export interface KinesisStreamSourceConfigurationProps {
    kinesisStreamARN: Value<string>;
    roleARN: Value<string>;
}