import { PasswordPolicyProps } from './PasswordPolicyProps';

export function policiesProps(policiesPropsProps: PoliciesProps): PoliciesProps { return (policiesPropsProps) }

export interface PoliciesProps {
    passwordPolicy?: PasswordPolicyProps;
}