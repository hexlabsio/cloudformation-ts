import { Value } from '../../../kloudformation/Value';

export function passwordPolicyProps(passwordPolicyPropsProps: PasswordPolicyProps): PasswordPolicyProps { return (passwordPolicyPropsProps) }

export interface PasswordPolicyProps {
    requireNumbers?: Value<boolean>;
    minimumLength?: Value<number>;
    temporaryPasswordValidityDays?: Value<number>;
    requireUppercase?: Value<boolean>;
    requireLowercase?: Value<boolean>;
    requireSymbols?: Value<boolean>;
}