import { Value } from '../../kloudformation/Value';
import { VpcSettingsProps } from './simplead/VpcSettingsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type SimpleADAttributes = { Alias: Attribute<string>; DnsIpAddresses: Attribute<Value<string>[]> }
export function simpleAD(simpleADProps: SimpleAD): SimpleAD & { attributes: SimpleADAttributes } { return ({ ...simpleADProps, _logicalType: 'AWS::DirectoryService::SimpleAD', attributes: { Alias: 'Alias', DnsIpAddresses: 'DnsIpAddresses' } }) }

export interface SimpleAD extends KloudResource {
    name: Value<string>;
    password: Value<string>;
    size: Value<string>;
    vpcSettings: VpcSettingsProps;
    createAlias?: Value<boolean>;
    description?: Value<string>;
    enableSso?: Value<boolean>;
    shortName?: Value<string>;
}