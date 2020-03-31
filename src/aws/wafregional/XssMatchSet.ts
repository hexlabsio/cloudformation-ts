import { Value } from '../../kloudformation/Value';
import { XssMatchTupleProps } from './xssmatchset/XssMatchTupleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type XssMatchSetAttributes = {  }
export function xssMatchSet(xssMatchSetProps: XssMatchSet): XssMatchSet & { attributes: XssMatchSetAttributes } { return ({ ...xssMatchSetProps, _logicalType: 'AWS::WAFRegional::XssMatchSet', attributes: {  } }) }

export interface XssMatchSet extends KloudResource {
    name: Value<string>;
    xssMatchTuples?: XssMatchTupleProps[];
}