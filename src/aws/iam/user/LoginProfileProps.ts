import { Value } from '../../../kloudformation/Value';

export function loginProfileProps(loginProfilePropsProps: LoginProfileProps): LoginProfileProps { return (loginProfilePropsProps) as unknown as LoginProfileProps }

export interface LoginProfileProps {
    password: Value<string>;
    passwordResetRequired?: Value<boolean>;
}