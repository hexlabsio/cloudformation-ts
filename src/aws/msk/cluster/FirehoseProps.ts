import { Value } from '../../../kloudformation/Value';

export function firehoseProps(firehosePropsProps: FirehoseProps): FirehoseProps { return (firehosePropsProps) as unknown as FirehoseProps }

export interface FirehoseProps {
    enabled: Value<boolean>;
    deliveryStream?: Value<string>;
}