import { Value } from '../../kloudformation/Value';
import { XssMatchTupleProps } from '../wafregional/xssmatchset/XssMatchTupleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function xssMatchSet(xssMatchSetProps: XssMatchSet & { logicalName?: string }): XssMatchSet { return ({ ...xssMatchSetProps, _logicalType: 'AWS::WAF::XssMatchSet' }) as unknown as XssMatchSet }

export interface XssMatchSet extends KloudResource {
    name: Value<string>;
    xssMatchTuples: XssMatchTupleProps[];
}