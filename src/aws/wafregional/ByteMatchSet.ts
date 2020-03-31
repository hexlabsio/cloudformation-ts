import { Value } from '../../kloudformation/Value';
import { ByteMatchTupleProps } from './bytematchset/ByteMatchTupleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ByteMatchSetAttributes = {  }
export function byteMatchSet(byteMatchSetProps: ByteMatchSet): ByteMatchSet & { attributes: ByteMatchSetAttributes } { return ({ ...byteMatchSetProps, _logicalType: 'AWS::WAFRegional::ByteMatchSet', attributes: {  } }) }

export interface ByteMatchSet extends KloudResource {
    name: Value<string>;
    byteMatchTuples?: ByteMatchTupleProps[];
}