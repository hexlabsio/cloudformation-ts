import { Value } from '../../../kloudformation/Value';

export function authenticateOidcConfigProps(authenticateOidcConfigPropsProps: AuthenticateOidcConfigProps): AuthenticateOidcConfigProps { return (authenticateOidcConfigPropsProps) }

export interface AuthenticateOidcConfigProps {
    authorizationEndpoint: Value<string>;
    clientId: Value<string>;
    clientSecret: Value<string>;
    issuer: Value<string>;
    tokenEndpoint: Value<string>;
    userInfoEndpoint: Value<string>;
    authenticationRequestExtraParams?: { [key: string]: Value<string> };
    onUnauthenticatedRequest?: Value<string>;
    scope?: Value<string>;
    sessionCookieName?: Value<string>;
    sessionTimeout?: Value<number>;
}