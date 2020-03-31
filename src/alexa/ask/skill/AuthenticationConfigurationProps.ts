import { Value } from '../../../kloudformation/Value';

export function authenticationConfigurationProps(authenticationConfigurationPropsProps: AuthenticationConfigurationProps): AuthenticationConfigurationProps { return (authenticationConfigurationPropsProps) }

export interface AuthenticationConfigurationProps {
    refreshToken: Value<string>;
    clientSecret: Value<string>;
    clientId: Value<string>;
}