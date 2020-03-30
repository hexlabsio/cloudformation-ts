import { Value } from '../../../kloudformation/Value';

export function kinesisFirehoseDestinationProps(kinesisFirehoseDestinationPropsProps: KinesisFirehoseDestinationProps): KinesisFirehoseDestinationProps { return (kinesisFirehoseDestinationPropsProps) as unknown as KinesisFirehoseDestinationProps }

export interface KinesisFirehoseDestinationProps {
    deliveryStreamArn: Value<string>;
    iamRoleArn: Value<string>;
}