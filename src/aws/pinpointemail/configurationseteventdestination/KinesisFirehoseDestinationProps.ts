import { Value } from '../../../kloudformation/Value';

export function kinesisFirehoseDestinationProps(kinesisFirehoseDestinationPropsProps: KinesisFirehoseDestinationProps): KinesisFirehoseDestinationProps { return (kinesisFirehoseDestinationPropsProps) }

export interface KinesisFirehoseDestinationProps {
    deliveryStreamArn: Value<string>;
    iamRoleArn: Value<string>;
}