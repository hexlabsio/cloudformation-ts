import { Value } from '../../kloudformation/Value';
import { VpcSettingsProps } from './microsoftad/VpcSettingsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function microsoftAD(microsoftADProps: MicrosoftAD & { logicalName?: string }): MicrosoftAD { return ({ ...microsoftADProps, _logicalType: 'AWS::DirectoryService::MicrosoftAD' }) as unknown as MicrosoftAD }

export interface MicrosoftAD extends KloudResource {
    name: Value<string>;
    password: Value<string>;
    vpcSettings: VpcSettingsProps;
    createAlias?: Value<boolean>;
    edition?: Value<string>;
    enableSso?: Value<boolean>;
    shortName?: Value<string>;
}