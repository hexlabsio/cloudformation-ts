import { AliasTargetProps } from './AliasTargetProps';
import { Value } from '../../../kloudformation/Value';
import { GeoLocationProps } from './GeoLocationProps';

export interface RecordSetProps {
  aliasTarget?: AliasTargetProps
  comment?: Value<string>
  failover?: Value<string>
  geoLocation?: GeoLocationProps
  healthCheckId?: Value<string>
  hostedZoneId?: Value<string>
  hostedZoneName?: Value<string>
  multiValueAnswer?: Value<boolean>
  name: Value<string>
  region?: Value<string>
  resourceRecords?: Value<Value<string>[]>
  setIdentifier?: Value<string>
  tTL?: Value<string>
  type: Value<string>
  weight?: Value<number>
}