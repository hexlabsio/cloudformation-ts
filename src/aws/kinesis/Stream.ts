import { Value } from '../../kloudformation/Value';
import { StreamEncryptionProps } from './stream/StreamEncryptionProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function stream(streamProps: Stream & { logicalName?: string }): Stream { return ({ ...streamProps, _logicalType: 'AWS::Kinesis::Stream' }) as unknown as Stream }

export interface Stream extends KloudResource {
    shardCount: Value<number>;
    name?: Value<string>;
    retentionPeriodHours?: Value<number>;
    streamEncryption?: StreamEncryptionProps;
    tags?: Tag[];
}