import { Value } from '../../kloudformation/Value';
import { XssMatchTupleProps } from './xssMatchSet/XssMatchTupleProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function xssMatchSet(xssMatchSetProps: XssMatchSet): XssMatchSet { return ({ ...xssMatchSetProps, _logicalType: '' }) }
  
export interface XssMatchSet extends KloudResource {
  name: Value<string>
  xssMatchTuples: XssMatchTupleProps[]
}