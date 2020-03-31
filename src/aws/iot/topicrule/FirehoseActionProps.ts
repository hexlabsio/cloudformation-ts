import { Value } from '../../../kloudformation/Value';

export function firehoseActionProps(firehoseActionPropsProps: FirehoseActionProps): FirehoseActionProps { return (firehoseActionPropsProps) }

export interface FirehoseActionProps {
    deliveryStreamName: Value<string>;
    roleArn: Value<string>;
    separator?: Value<string>;
}