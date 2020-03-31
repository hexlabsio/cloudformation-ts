import { Value } from '../../../kloudformation/Value';

export function kinesisFirehoseOutputProps(kinesisFirehoseOutputPropsProps: KinesisFirehoseOutputProps): KinesisFirehoseOutputProps { return (kinesisFirehoseOutputPropsProps) }

export interface KinesisFirehoseOutputProps {
    resourceARN: Value<string>;
    roleARN: Value<string>;
}