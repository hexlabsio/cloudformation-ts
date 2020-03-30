import { Value } from '../../../kloudformation/Value';

export function kinesisSettingsProps(kinesisSettingsPropsProps: KinesisSettingsProps): KinesisSettingsProps { return (kinesisSettingsPropsProps) as unknown as KinesisSettingsProps }

export interface KinesisSettingsProps {
    messageFormat?: Value<string>;
    streamArn?: Value<string>;
    serviceAccessRoleArn?: Value<string>;
}