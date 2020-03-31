import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type UserPoolIdentityProviderAttributes = {  }
export function userPoolIdentityProvider(userPoolIdentityProviderProps: UserPoolIdentityProvider): UserPoolIdentityProvider & { attributes: UserPoolIdentityProviderAttributes } { return ({ ...userPoolIdentityProviderProps, _logicalType: 'AWS::Cognito::UserPoolIdentityProvider', attributes: {  } }) }

export interface UserPoolIdentityProvider extends KloudResource {
    providerName: Value<string>;
    userPoolId: Value<string>;
    providerType: Value<string>;
    attributeMapping?: Value<any>;
    providerDetails?: Value<any>;
    idpIdentifiers?: Value<Value<string>[]>;
}