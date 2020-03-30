import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function streamConsumer(streamConsumerProps: StreamConsumer & { logicalName?: string }): StreamConsumer { return ({ ...streamConsumerProps, _logicalType: 'AWS::Kinesis::StreamConsumer' }) as unknown as StreamConsumer }

export interface StreamConsumer extends KloudResource {
    consumerName: Value<string>;
    streamARN: Value<string>;
}