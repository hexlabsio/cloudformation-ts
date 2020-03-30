import { Value } from '../../kloudformation/Value';
import { HostedZoneConfigProps } from './hostedzone/HostedZoneConfigProps';
import { HostedZoneTagProps } from './hostedzone/HostedZoneTagProps';
import { QueryLoggingConfigProps } from './hostedzone/QueryLoggingConfigProps';
import { VPCProps } from './hostedzone/VPCProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function hostedZone(hostedZoneProps: HostedZone & { logicalName?: string }): HostedZone { return ({ ...hostedZoneProps, _logicalType: 'AWS::Route53::HostedZone' }) as unknown as HostedZone }

export interface HostedZone extends KloudResource {
    name: Value<string>;
    hostedZoneConfig?: HostedZoneConfigProps;
    hostedZoneTags?: HostedZoneTagProps[];
    queryLoggingConfig?: QueryLoggingConfigProps;
    vPCs?: VPCProps[];
}