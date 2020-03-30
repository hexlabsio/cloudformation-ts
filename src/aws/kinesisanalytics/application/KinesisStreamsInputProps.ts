import { Value } from '../../../kloudformation/Value';

export function kinesisStreamsInputProps(kinesisStreamsInputPropsProps: KinesisStreamsInputProps): KinesisStreamsInputProps { return (kinesisStreamsInputPropsProps) as unknown as KinesisStreamsInputProps }

export interface KinesisStreamsInputProps {
    resourceARN: Value<string>;
    roleARN: Value<string>;
}