import { PushSyncProps } from './identityPool/PushSyncProps';
import { CognitoIdentityProviderProps } from './identityPool/CognitoIdentityProviderProps';
import { Value } from '../../kloudformation/Value';
import { CognitoStreamsProps } from './identityPool/CognitoStreamsProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type IdentityPoolAttributes = { Name: Attribute<string> }
export function identityPool(identityPoolProps: IdentityPool): IdentityPool & {attributes: IdentityPoolAttributes} { return ({ ...identityPoolProps, _logicalType: 'AWS::Cognito::IdentityPool', attributes: { Name: 'Name' } }) }
   
export interface IdentityPool extends KloudResource {
  pushSync?: PushSyncProps
  cognitoIdentityProviders?: CognitoIdentityProviderProps[]
  cognitoEvents?: Value<any>
  developerProviderName?: Value<string>
  cognitoStreams?: CognitoStreamsProps
  identityPoolName?: Value<string>
  allowUnauthenticatedIdentities: Value<boolean>
  supportedLoginProviders?: Value<any>
  samlProviderARNs?: Value<Value<string>[]>
  openIdConnectProviderARNs?: Value<Value<string>[]>
  allowClassicFlow?: Value<boolean>
}