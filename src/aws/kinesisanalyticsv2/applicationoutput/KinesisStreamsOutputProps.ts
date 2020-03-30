import { Value } from '../../../kloudformation/Value';

export function kinesisStreamsOutputProps(kinesisStreamsOutputPropsProps: KinesisStreamsOutputProps): KinesisStreamsOutputProps { return (kinesisStreamsOutputPropsProps) as unknown as KinesisStreamsOutputProps }

export interface KinesisStreamsOutputProps {
    resourceARN: Value<string>;
}