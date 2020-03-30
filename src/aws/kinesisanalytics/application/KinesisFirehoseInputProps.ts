import { Value } from '../../../kloudformation/Value';

export function kinesisFirehoseInputProps(kinesisFirehoseInputPropsProps: KinesisFirehoseInputProps): KinesisFirehoseInputProps { return (kinesisFirehoseInputPropsProps) as unknown as KinesisFirehoseInputProps }

export interface KinesisFirehoseInputProps {
    resourceARN: Value<string>;
    roleARN: Value<string>;
}