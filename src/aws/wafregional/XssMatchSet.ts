import { XssMatchTupleProps } from './xssMatchSet/XssMatchTupleProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function xssMatchSet(xssMatchSetProps: XssMatchSet): XssMatchSet { return ({ ...xssMatchSetProps, _logicalType: '' }) }
  
export interface XssMatchSet extends KloudResource {
  xssMatchTuples?: XssMatchTupleProps[]
  name: Value<string>
}