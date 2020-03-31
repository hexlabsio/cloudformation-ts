import { Value } from '../../../kloudformation/Value';

export function authenticateCognitoConfigProps(authenticateCognitoConfigPropsProps: AuthenticateCognitoConfigProps): AuthenticateCognitoConfigProps { return (authenticateCognitoConfigPropsProps) }

export interface AuthenticateCognitoConfigProps {
    userPoolArn: Value<string>;
    userPoolClientId: Value<string>;
    userPoolDomain: Value<string>;
    authenticationRequestExtraParams?: { [key: string]: Value<string> };
    onUnauthenticatedRequest?: Value<string>;
    scope?: Value<string>;
    sessionCookieName?: Value<string>;
    sessionTimeout?: Value<number>;
}