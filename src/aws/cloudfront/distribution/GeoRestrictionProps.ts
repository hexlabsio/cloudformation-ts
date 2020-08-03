import { Value } from '../../../kloudformation/Value';

export interface GeoRestrictionProps {
  locations?: Value<Value<string>[]>
  restrictionType: Value<string>
}