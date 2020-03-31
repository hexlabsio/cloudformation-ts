import { Value } from '../../../kloudformation/Value';

export function geoRestrictionProps(geoRestrictionPropsProps: GeoRestrictionProps): GeoRestrictionProps { return (geoRestrictionPropsProps) }

export interface GeoRestrictionProps {
    restrictionType: Value<string>;
    locations?: Value<Value<string>[]>;
}