import { Value } from '../../kloudformation/Value';
import { VpcSettingsProps } from './microsoftad/VpcSettingsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type MicrosoftADAttributes = { Alias: Attribute<string>; DnsIpAddresses: Attribute<Value<string>[]> }
export function microsoftAD(microsoftADProps: MicrosoftAD): MicrosoftAD & { attributes: MicrosoftADAttributes } { return ({ ...microsoftADProps, _logicalType: 'AWS::DirectoryService::MicrosoftAD', attributes: { Alias: 'Alias', DnsIpAddresses: 'DnsIpAddresses' } }) }

export interface MicrosoftAD extends KloudResource {
    name: Value<string>;
    password: Value<string>;
    vpcSettings: VpcSettingsProps;
    createAlias?: Value<boolean>;
    edition?: Value<string>;
    enableSso?: Value<boolean>;
    shortName?: Value<string>;
}