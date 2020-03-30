import { Value } from '../../../kloudformation/Value';

export function kinesisStreamSourceConfigurationProps(kinesisStreamSourceConfigurationPropsProps: KinesisStreamSourceConfigurationProps): KinesisStreamSourceConfigurationProps { return (kinesisStreamSourceConfigurationPropsProps) as unknown as KinesisStreamSourceConfigurationProps }

export interface KinesisStreamSourceConfigurationProps {
    kinesisStreamARN: Value<string>;
    roleARN: Value<string>;
}