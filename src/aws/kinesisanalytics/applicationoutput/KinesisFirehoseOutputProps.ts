import { Value } from '../../../kloudformation/Value';

export function kinesisFirehoseOutputProps(kinesisFirehoseOutputPropsProps: KinesisFirehoseOutputProps): KinesisFirehoseOutputProps { return (kinesisFirehoseOutputPropsProps) as unknown as KinesisFirehoseOutputProps }

export interface KinesisFirehoseOutputProps {
    resourceARN: Value<string>;
    roleARN: Value<string>;
}