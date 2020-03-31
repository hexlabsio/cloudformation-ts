import { Value } from '../../../kloudformation/Value';

export function geoLocationProps(geoLocationPropsProps: GeoLocationProps): GeoLocationProps { return (geoLocationPropsProps) }

export interface GeoLocationProps {
    continentCode?: Value<string>;
    countryCode?: Value<string>;
    subdivisionCode?: Value<string>;
}