import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type StreamConsumerAttributes = { ConsumerCreationTimestamp: Attribute<string>;ConsumerName: Attribute<string>;ConsumerARN: Attribute<string>;ConsumerStatus: Attribute<string>;StreamARN: Attribute<string> }
export function streamConsumer(streamConsumerProps: StreamConsumer): StreamConsumer & {attributes: StreamConsumerAttributes} { return ({ ...streamConsumerProps, _logicalType: 'AWS::Kinesis::StreamConsumer', attributes: { ConsumerCreationTimestamp: 'ConsumerCreationTimestamp',ConsumerName: 'ConsumerName',ConsumerARN: 'ConsumerARN',ConsumerStatus: 'ConsumerStatus',StreamARN: 'StreamARN' } }) }
   
export interface StreamConsumer extends KloudResource {
  consumerName: Value<string>
  streamARN: Value<string>
}