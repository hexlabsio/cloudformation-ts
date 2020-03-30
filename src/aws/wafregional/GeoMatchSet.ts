import { Value } from '../../kloudformation/Value';
import { GeoMatchConstraintProps } from './geomatchset/GeoMatchConstraintProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function geoMatchSet(geoMatchSetProps: GeoMatchSet & { logicalName?: string }): GeoMatchSet { return ({ ...geoMatchSetProps, _logicalType: 'AWS::WAFRegional::GeoMatchSet' }) as unknown as GeoMatchSet }

export interface GeoMatchSet extends KloudResource {
    name: Value<string>;
    geoMatchConstraints?: GeoMatchConstraintProps[];
}