import { Value } from '../../../kloudformation/Value';

export function loginProfileProps(loginProfilePropsProps: LoginProfileProps): LoginProfileProps { return (loginProfilePropsProps) }

export interface LoginProfileProps {
    password: Value<string>;
    passwordResetRequired?: Value<boolean>;
}