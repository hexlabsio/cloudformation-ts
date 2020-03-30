import { Value } from '../../kloudformation/Value';
import { OpenIDConnectConfigProps } from './graphqlapi/OpenIDConnectConfigProps';
import { UserPoolConfigProps } from './graphqlapi/UserPoolConfigProps';
import { Tag } from '../Tag';
import { LogConfigProps } from './graphqlapi/LogConfigProps';
import { AdditionalAuthenticationProviderProps } from './graphqlapi/AdditionalAuthenticationProviderProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function graphQLApi(graphQLApiProps: GraphQLApi & { logicalName?: string }): GraphQLApi { return ({ ...graphQLApiProps, _logicalType: 'AWS::AppSync::GraphQLApi' }) as unknown as GraphQLApi }

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