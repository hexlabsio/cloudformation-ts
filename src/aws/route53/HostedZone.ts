import { HostedZoneConfigProps } from './hostedZone/HostedZoneConfigProps';
import { HostedZoneTagProps } from './hostedZone/HostedZoneTagProps';
import { Value } from '../../kloudformation/Value';
import { QueryLoggingConfigProps } from './hostedZone/QueryLoggingConfigProps';
import { VPCProps } from './hostedZone/VPCProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type HostedZoneAttributes = { NameServers: Attribute<string[]> }
export function hostedZone(hostedZoneProps: HostedZone): HostedZone & {attributes: HostedZoneAttributes} { return ({ ...hostedZoneProps, _logicalType: 'AWS::Route53::HostedZone', attributes: { NameServers: 'NameServers' } }) }
   
export interface HostedZone extends KloudResource {
  hostedZoneConfig?: HostedZoneConfigProps
  hostedZoneTags?: HostedZoneTagProps[]
  name: Value<string>
  queryLoggingConfig?: QueryLoggingConfigProps
  vPCs?: VPCProps[]
}