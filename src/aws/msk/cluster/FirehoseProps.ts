import { Value } from '../../../kloudformation/Value';

export function firehoseProps(firehosePropsProps: FirehoseProps): FirehoseProps { return (firehosePropsProps) }

export interface FirehoseProps {
    enabled: Value<boolean>;
    deliveryStream?: Value<string>;
}