import { Value } from '../../kloudformation/Value';
import { HostedZoneConfigProps } from './hostedzone/HostedZoneConfigProps';
import { HostedZoneTagProps } from './hostedzone/HostedZoneTagProps';
import { QueryLoggingConfigProps } from './hostedzone/QueryLoggingConfigProps';
import { VPCProps } from './hostedzone/VPCProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type HostedZoneAttributes = { NameServers: Attribute<Value<string>[]> }
export function hostedZone(hostedZoneProps: HostedZone): HostedZone & { attributes: HostedZoneAttributes } { return ({ ...hostedZoneProps, _logicalType: 'AWS::Route53::HostedZone', attributes: { NameServers: 'NameServers' } }) }

export interface HostedZone extends KloudResource {
    name: Value<string>;
    hostedZoneConfig?: HostedZoneConfigProps;
    hostedZoneTags?: HostedZoneTagProps[];
    queryLoggingConfig?: QueryLoggingConfigProps;
    vPCs?: VPCProps[];
}