import { GeoMatchConstraintProps } from './geoMatchSet/GeoMatchConstraintProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function geoMatchSet(geoMatchSetProps: GeoMatchSet): GeoMatchSet { return ({ ...geoMatchSetProps, _logicalType: '' }) }
  
export interface GeoMatchSet extends KloudResource {
  geoMatchConstraints?: GeoMatchConstraintProps[]
  name: Value<string>
}