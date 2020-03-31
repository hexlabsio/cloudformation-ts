import { Value } from '../../../kloudformation/Value';
import { AliasTargetProps } from './AliasTargetProps';
import { GeoLocationProps } from './GeoLocationProps';

export function recordSetProps(recordSetPropsProps: RecordSetProps): RecordSetProps { return (recordSetPropsProps) }

export interface RecordSetProps {
    name: Value<string>;
    type: Value<string>;
    aliasTarget?: AliasTargetProps;
    comment?: Value<string>;
    failover?: Value<string>;
    geoLocation?: GeoLocationProps;
    healthCheckId?: Value<string>;
    hostedZoneId?: Value<string>;
    hostedZoneName?: Value<string>;
    multiValueAnswer?: Value<boolean>;
    region?: Value<string>;
    resourceRecords?: Value<Value<string>[]>;
    setIdentifier?: Value<string>;
    tTL?: Value<string>;
    weight?: Value<number>;
}