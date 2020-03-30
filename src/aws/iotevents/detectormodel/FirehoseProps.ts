import { Value } from '../../../kloudformation/Value';

export function firehoseProps(firehosePropsProps: FirehoseProps): FirehoseProps { return (firehosePropsProps) as unknown as FirehoseProps }

export interface FirehoseProps {
    deliveryStreamName?: Value<string>;
    separator?: Value<string>;
}