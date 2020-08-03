import { Value } from '../../../kloudformation/Value';

export interface GeoLocationProps {
  continentCode?: Value<string>
  countryCode?: Value<string>
  subdivisionCode?: Value<string>
}