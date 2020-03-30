import { Value } from '../../kloudformation/Value';
import { ByteMatchTupleProps } from '../wafregional/bytematchset/ByteMatchTupleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function byteMatchSet(byteMatchSetProps: ByteMatchSet & { logicalName?: string }): ByteMatchSet { return ({ ...byteMatchSetProps, _logicalType: 'AWS::WAF::ByteMatchSet' }) as unknown as ByteMatchSet }

export interface ByteMatchSet extends KloudResource {
    name: Value<string>;
    byteMatchTuples?: ByteMatchTupleProps[];
}