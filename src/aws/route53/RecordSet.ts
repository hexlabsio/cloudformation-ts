import { Value } from '../../kloudformation/Value';
import { AliasTargetProps } from './recordset/AliasTargetProps';
import { GeoLocationProps } from './recordset/GeoLocationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type RecordSetAttributes = {  }
export function recordSet(recordSetProps: RecordSet): RecordSet & { attributes: RecordSetAttributes } { return ({ ...recordSetProps, _logicalType: 'AWS::Route53::RecordSet', attributes: {  } }) }

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