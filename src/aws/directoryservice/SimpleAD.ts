import { Value } from '../../kloudformation/Value';
import { VpcSettingsProps } from './simpleAD/VpcSettingsProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type SimpleADAttributes = { Alias: Attribute<string>;DnsIpAddresses: Attribute<string[]> }
export function simpleAD(simpleADProps: SimpleAD): SimpleAD & {attributes: SimpleADAttributes} { return ({ ...simpleADProps, _logicalType: 'AWS::DirectoryService::SimpleAD', attributes: { Alias: 'Alias',DnsIpAddresses: 'DnsIpAddresses' } }) }
   
export interface SimpleAD extends KloudResource {
  createAlias?: Value<boolean>
  description?: Value<string>
  enableSso?: Value<boolean>
  name: Value<string>
  password: Value<string>
  shortName?: Value<string>
  size: Value<string>
  vpcSettings: VpcSettingsProps
}