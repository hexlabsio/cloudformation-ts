import { Value } from '../../kloudformation/Value';
import { AliasTargetProps } from './recordset/AliasTargetProps';
import { GeoLocationProps } from './recordset/GeoLocationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function recordSet(recordSetProps: RecordSet & { logicalName?: string }): RecordSet { return ({ ...recordSetProps, _logicalType: 'AWS::Route53::RecordSet' }) as unknown as RecordSet }

export interface RecordSet extends KloudResource {
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