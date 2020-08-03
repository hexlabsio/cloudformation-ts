import { OpenIDConnectConfigProps } from './graphQLApi/OpenIDConnectConfigProps';
import { Value } from '../../kloudformation/Value';
import { UserPoolConfigProps } from './graphQLApi/UserPoolConfigProps';
import { TagsProps } from './graphQLApi/TagsProps';
import { LogConfigProps } from './graphQLApi/LogConfigProps';
import { AdditionalAuthenticationProvidersProps } from './graphQLApi/AdditionalAuthenticationProvidersProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type GraphQLApiAttributes = { GraphQLUrl: Attribute<string>;Arn: Attribute<string>;ApiId: Attribute<string> }
export function graphQLApi(graphQLApiProps: GraphQLApi): GraphQLApi & {attributes: GraphQLApiAttributes} { return ({ ...graphQLApiProps, _logicalType: 'AWS::AppSync::GraphQLApi', attributes: { GraphQLUrl: 'GraphQLUrl',Arn: 'Arn',ApiId: 'ApiId' } }) }
   
export interface GraphQLApi extends KloudResource {
  openIDConnectConfig?: OpenIDConnectConfigProps
  xrayEnabled?: Value<boolean>
  userPoolConfig?: UserPoolConfigProps
  tags?: TagsProps
  name: Value<string>
  authenticationType: Value<string>
  logConfig?: LogConfigProps
  additionalAuthenticationProviders?: AdditionalAuthenticationProvidersProps
}