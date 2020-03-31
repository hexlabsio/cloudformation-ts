import { Value } from '../../kloudformation/Value';
import { StreamEncryptionProps } from './stream/StreamEncryptionProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type StreamAttributes = { Arn: Attribute<string> }
export function stream(streamProps: Stream): Stream & { attributes: StreamAttributes } { return ({ ...streamProps, _logicalType: 'AWS::Kinesis::Stream', attributes: { Arn: 'Arn' } }) }

export interface Stream extends KloudResource {
    shardCount: Value<number>;
    name?: Value<string>;
    retentionPeriodHours?: Value<number>;
    streamEncryption?: StreamEncryptionProps;
    tags?: Tag[];
}