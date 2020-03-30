import { Value } from '../../../kloudformation/Value';

export function kinesisActionProps(kinesisActionPropsProps: KinesisActionProps): KinesisActionProps { return (kinesisActionPropsProps) as unknown as KinesisActionProps }

export interface KinesisActionProps {
    roleArn: Value<string>;
    streamName: Value<string>;
    partitionKey?: Value<string>;
}