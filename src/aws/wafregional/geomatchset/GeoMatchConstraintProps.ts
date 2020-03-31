import { Value } from '../../../kloudformation/Value';

export function geoMatchConstraintProps(geoMatchConstraintPropsProps: GeoMatchConstraintProps): GeoMatchConstraintProps { return (geoMatchConstraintPropsProps) }

export interface GeoMatchConstraintProps {
    type: Value<string>;
    value: Value<string>;
}