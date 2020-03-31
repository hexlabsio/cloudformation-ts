import { Value } from '../../kloudformation/Value';
import { OpenIDConnectConfigProps } from './graphqlapi/OpenIDConnectConfigProps';
import { UserPoolConfigProps } from './graphqlapi/UserPoolConfigProps';
import { Tag } from '../Tag';
import { LogConfigProps } from './graphqlapi/LogConfigProps';
import { AdditionalAuthenticationProviderProps } from './graphqlapi/AdditionalAuthenticationProviderProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type GraphQLApiAttributes = { GraphQLUrl: Attribute<string>; Arn: Attribute<string>; ApiId: Attribute<string> }
export function graphQLApi(graphQLApiProps: GraphQLApi): GraphQLApi & { attributes: GraphQLApiAttributes } { return ({ ...graphQLApiProps, _logicalType: 'AWS::AppSync::GraphQLApi', attributes: { GraphQLUrl: 'GraphQLUrl', Arn: 'Arn', ApiId: 'ApiId' } }) }

export interface GraphQLApi extends KloudResource {
    name: Value<string>;
    authenticationType: Value<string>;
    openIDConnectConfig?: OpenIDConnectConfigProps;
    xrayEnabled?: Value<boolean>;
    userPoolConfig?: UserPoolConfigProps;
    tags?: Tag[];
    logConfig?: LogConfigProps;
    additionalAuthenticationProviders?: AdditionalAuthenticationProviderProps[];
}