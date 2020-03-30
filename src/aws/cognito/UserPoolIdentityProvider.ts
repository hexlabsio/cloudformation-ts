import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function userPoolIdentityProvider(userPoolIdentityProviderProps: UserPoolIdentityProvider & { logicalName?: string }): UserPoolIdentityProvider { return ({ ...userPoolIdentityProviderProps, _logicalType: 'AWS::Cognito::UserPoolIdentityProvider' }) as unknown as UserPoolIdentityProvider }

export interface UserPoolIdentityProvider extends KloudResource {
    providerName: Value<string>;
    userPoolId: Value<string>;
    providerType: Value<string>;
    attributeMapping?: Value<any>;
    providerDetails?: Value<any>;
    idpIdentifiers?: Value<Value<string>[]>;
}