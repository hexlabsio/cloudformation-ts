import { Value } from '../../../kloudformation/Value';

export function kinesisFirehoseInputProps(kinesisFirehoseInputPropsProps: KinesisFirehoseInputProps): KinesisFirehoseInputProps { return (kinesisFirehoseInputPropsProps) }

export interface KinesisFirehoseInputProps {
    resourceARN: Value<string>;
}