import { Value } from '../../../kloudformation/Value';
import { OpenIDConnectConfigProps } from './OpenIDConnectConfigProps';
import { CognitoUserPoolConfigProps } from './CognitoUserPoolConfigProps';

export function additionalAuthenticationProviderProps(additionalAuthenticationProviderPropsProps: AdditionalAuthenticationProviderProps): AdditionalAuthenticationProviderProps { return (additionalAuthenticationProviderPropsProps) }

export interface AdditionalAuthenticationProviderProps {
    authenticationType: Value<string>;
    openIDConnectConfig?: OpenIDConnectConfigProps;
    userPoolConfig?: CognitoUserPoolConfigProps;
}