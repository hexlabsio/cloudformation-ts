import { Value } from '../../kloudformation/Value';
import { PushSyncProps } from './identitypool/PushSyncProps';
import { CognitoIdentityProviderProps } from './identitypool/CognitoIdentityProviderProps';
import { CognitoStreamsProps } from './identitypool/CognitoStreamsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function identityPool(identityPoolProps: IdentityPool & { logicalName?: string }): IdentityPool { return ({ ...identityPoolProps, _logicalType: 'AWS::Cognito::IdentityPool' }) as unknown as IdentityPool }

export interface IdentityPool extends KloudResource {
    allowUnauthenticatedIdentities: Value<boolean>;
    pushSync?: PushSyncProps;
    cognitoIdentityProviders?: CognitoIdentityProviderProps[];
    cognitoEvents?: Value<any>;
    developerProviderName?: Value<string>;
    cognitoStreams?: CognitoStreamsProps;
    identityPoolName?: Value<string>;
    supportedLoginProviders?: Value<any>;
    samlProviderARNs?: Value<Value<string>[]>;
    openIdConnectProviderARNs?: Value<Value<string>[]>;
    allowClassicFlow?: Value<boolean>;
}