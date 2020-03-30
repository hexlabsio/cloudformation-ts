import { Value } from '../../kloudformation/Value';
import { XssMatchTupleProps } from './xssmatchset/XssMatchTupleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function xssMatchSet(xssMatchSetProps: XssMatchSet & { logicalName?: string }): XssMatchSet { return ({ ...xssMatchSetProps, _logicalType: 'AWS::WAFRegional::XssMatchSet' }) as unknown as XssMatchSet }

export interface XssMatchSet extends KloudResource {
    name: Value<string>;
    xssMatchTuples?: XssMatchTupleProps[];
}