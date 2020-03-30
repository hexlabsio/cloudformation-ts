import { InputWhitelistRuleCidrProps } from './inputsecuritygroup/InputWhitelistRuleCidrProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function inputSecurityGroup(inputSecurityGroupProps: InputSecurityGroup & { logicalName?: string }): InputSecurityGroup { return ({ ...inputSecurityGroupProps, _logicalType: 'AWS::MediaLive::InputSecurityGroup' }) as unknown as InputSecurityGroup }

export interface InputSecurityGroup extends KloudResource {
    whitelistRules?: InputWhitelistRuleCidrProps[];
    tags?: Value<any>;
}