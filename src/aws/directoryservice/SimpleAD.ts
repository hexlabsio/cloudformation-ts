import { Value } from '../../kloudformation/Value';
import { VpcSettingsProps } from './simplead/VpcSettingsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function simpleAD(simpleADProps: SimpleAD & { logicalName?: string }): SimpleAD { return ({ ...simpleADProps, _logicalType: 'AWS::DirectoryService::SimpleAD' }) as unknown as SimpleAD }

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