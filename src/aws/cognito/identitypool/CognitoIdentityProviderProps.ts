import { Value } from '../../../kloudformation/Value';

export function cognitoIdentityProviderProps(cognitoIdentityProviderPropsProps: CognitoIdentityProviderProps): CognitoIdentityProviderProps { return (cognitoIdentityProviderPropsProps) }

export interface CognitoIdentityProviderProps {
    serverSideTokenCheck?: Value<boolean>;
    providerName?: Value<string>;
    clientId?: Value<string>;
}