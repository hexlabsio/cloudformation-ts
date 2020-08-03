import { Value } from '../../kloudformation/Value';
import { VpcSettingsProps } from './microsoftAD/VpcSettingsProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type MicrosoftADAttributes = { Alias: Attribute<string>;DnsIpAddresses: Attribute<string[]> }
export function microsoftAD(microsoftADProps: MicrosoftAD): MicrosoftAD & {attributes: MicrosoftADAttributes} { return ({ ...microsoftADProps, _logicalType: 'AWS::DirectoryService::MicrosoftAD', attributes: { Alias: 'Alias',DnsIpAddresses: 'DnsIpAddresses' } }) }
   
export interface MicrosoftAD extends KloudResource {
  createAlias?: Value<boolean>
  edition?: Value<string>
  enableSso?: Value<boolean>
  name: Value<string>
  password: Value<string>
  shortName?: Value<string>
  vpcSettings: VpcSettingsProps
}