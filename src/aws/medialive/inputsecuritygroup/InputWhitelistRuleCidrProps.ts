import { Value } from '../../../kloudformation/Value';

export function inputWhitelistRuleCidrProps(inputWhitelistRuleCidrPropsProps: InputWhitelistRuleCidrProps): InputWhitelistRuleCidrProps { return (inputWhitelistRuleCidrPropsProps) as unknown as InputWhitelistRuleCidrProps }

export interface InputWhitelistRuleCidrProps {
    cidr?: Value<string>;
}