import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function userPoolIdentityProvider(userPoolIdentityProviderProps: UserPoolIdentityProvider): UserPoolIdentityProvider { return ({ ...userPoolIdentityProviderProps, _logicalType: '' }) }
  
export interface UserPoolIdentityProvider extends KloudResource {
  providerName: Value<string>
  userPoolId: Value<string>
  attributeMapping?: Value<any>
  providerDetails?: Value<any>
  providerType: Value<string>
  idpIdentifiers?: Value<Value<string>[]>
}