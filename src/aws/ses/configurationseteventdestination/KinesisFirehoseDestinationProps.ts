import { Value } from '../../../kloudformation/Value';

export function kinesisFirehoseDestinationProps(kinesisFirehoseDestinationPropsProps: KinesisFirehoseDestinationProps): KinesisFirehoseDestinationProps { return (kinesisFirehoseDestinationPropsProps) }

export interface KinesisFirehoseDestinationProps {
    iAMRoleARN: Value<string>;
    deliveryStreamARN: Value<string>;
}