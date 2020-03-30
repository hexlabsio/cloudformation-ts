import { PasswordPolicyProps } from './PasswordPolicyProps';

export function policiesProps(policiesPropsProps: PoliciesProps): PoliciesProps { return (policiesPropsProps) as unknown as PoliciesProps }

export interface PoliciesProps {
    passwordPolicy?: PasswordPolicyProps;
}