import { Value } from '../../kloudformation/Value';
import { AnalyticsConfigurationProps } from './userpoolclient/AnalyticsConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function userPoolClient(userPoolClientProps: UserPoolClient & { logicalName?: string }): UserPoolClient { return ({ ...userPoolClientProps, _logicalType: 'AWS::Cognito::UserPoolClient' }) as unknown as UserPoolClient }

export interface UserPoolClient extends KloudResource {
    userPoolId: Value<string>;
    analyticsConfiguration?: AnalyticsConfigurationProps;
    generateSecret?: Value<boolean>;
    callbackURLs?: Value<Value<string>[]>;
    allowedOAuthScopes?: Value<Value<string>[]>;
    readAttributes?: Value<Value<string>[]>;
    allowedOAuthFlowsUserPoolClient?: Value<boolean>;
    defaultRedirectURI?: Value<string>;
    supportedIdentityProviders?: Value<Value<string>[]>;
    clientName?: Value<string>;
    allowedOAuthFlows?: Value<Value<string>[]>;
    explicitAuthFlows?: Value<Value<string>[]>;
    logoutURLs?: Value<Value<string>[]>;
    refreshTokenValidity?: Value<number>;
    writeAttributes?: Value<Value<string>[]>;
    preventUserExistenceErrors?: Value<string>;
}