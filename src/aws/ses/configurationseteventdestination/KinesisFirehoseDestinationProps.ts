import { Value } from '../../../kloudformation/Value';

export function kinesisFirehoseDestinationProps(kinesisFirehoseDestinationPropsProps: KinesisFirehoseDestinationProps): KinesisFirehoseDestinationProps { return (kinesisFirehoseDestinationPropsProps) as unknown as KinesisFirehoseDestinationProps }

export interface KinesisFirehoseDestinationProps {
    iAMRoleARN: Value<string>;
    deliveryStreamARN: Value<string>;
}