import { Value } from '../../kloudformation/Value';
import { StreamEncryptionProps } from './stream/StreamEncryptionProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type StreamAttributes = { Arn: Attribute<string> }
export function stream(streamProps: Stream): Stream & {attributes: StreamAttributes} { return ({ ...streamProps, _logicalType: 'AWS::Kinesis::Stream', attributes: { Arn: 'Arn' } }) }
   
export interface Stream extends KloudResource {
  name?: Value<string>
  retentionPeriodHours?: Value<number>
  shardCount: Value<number>
  streamEncryption?: StreamEncryptionProps
  tags?: Tag[]
}