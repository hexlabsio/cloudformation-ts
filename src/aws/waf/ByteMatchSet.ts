import { ByteMatchTupleProps } from './byteMatchSet/ByteMatchTupleProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function byteMatchSet(byteMatchSetProps: ByteMatchSet): ByteMatchSet { return ({ ...byteMatchSetProps, _logicalType: '' }) }
  
export interface ByteMatchSet extends KloudResource {
  byteMatchTuples?: ByteMatchTupleProps[]
  name: Value<string>
}