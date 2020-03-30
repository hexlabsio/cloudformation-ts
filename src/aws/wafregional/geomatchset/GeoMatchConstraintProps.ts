import { Value } from '../../../kloudformation/Value';

export function geoMatchConstraintProps(geoMatchConstraintPropsProps: GeoMatchConstraintProps): GeoMatchConstraintProps { return (geoMatchConstraintPropsProps) as unknown as GeoMatchConstraintProps }

export interface GeoMatchConstraintProps {
    type: Value<string>;
    value: Value<string>;
}