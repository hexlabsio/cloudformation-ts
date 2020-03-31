import { Value } from '../../../kloudformation/Value';

export function kinesisActionProps(kinesisActionPropsProps: KinesisActionProps): KinesisActionProps { return (kinesisActionPropsProps) }

export interface KinesisActionProps {
    roleArn: Value<string>;
    streamName: Value<string>;
    partitionKey?: Value<string>;
}