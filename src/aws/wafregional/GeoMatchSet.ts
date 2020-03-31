import { Value } from '../../kloudformation/Value';
import { GeoMatchConstraintProps } from './geomatchset/GeoMatchConstraintProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type GeoMatchSetAttributes = {  }
export function geoMatchSet(geoMatchSetProps: GeoMatchSet): GeoMatchSet & { attributes: GeoMatchSetAttributes } { return ({ ...geoMatchSetProps, _logicalType: 'AWS::WAFRegional::GeoMatchSet', attributes: {  } }) }

export interface GeoMatchSet extends KloudResource {
    name: Value<string>;
    geoMatchConstraints?: GeoMatchConstraintProps[];
}