import { InputWhitelistRuleCidrProps } from './inputsecuritygroup/InputWhitelistRuleCidrProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type InputSecurityGroupAttributes = { Arn: Attribute<string> }
export function inputSecurityGroup(inputSecurityGroupProps: InputSecurityGroup): InputSecurityGroup & { attributes: InputSecurityGroupAttributes } { return ({ ...inputSecurityGroupProps, _logicalType: 'AWS::MediaLive::InputSecurityGroup', attributes: { Arn: 'Arn' } }) }

export interface InputSecurityGroup extends KloudResource {
    whitelistRules?: InputWhitelistRuleCidrProps[];
    tags?: Value<any>;
}