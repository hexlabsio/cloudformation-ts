import { Value } from '../../../kloudformation/Value';

export function kinesisStreamsOutputProps(kinesisStreamsOutputPropsProps: KinesisStreamsOutputProps): KinesisStreamsOutputProps { return (kinesisStreamsOutputPropsProps) }

export interface KinesisStreamsOutputProps {
    resourceARN: Value<string>;
}