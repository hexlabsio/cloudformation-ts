import { Value } from '../../kloudformation/Value';
import { JWTConfigurationProps } from './authorizer/JWTConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function authorizer(authorizerProps: Authorizer & { logicalName?: string }): Authorizer { return ({ ...authorizerProps, _logicalType: 'AWS::ApiGatewayV2::Authorizer' }) as unknown as Authorizer }

export interface Authorizer extends KloudResource {
    authorizerType: Value<string>;
    identitySource: Value<Value<string>[]>;
    apiId: Value<string>;
    name: Value<string>;
    identityValidationExpression?: Value<string>;
    authorizerUri?: Value<string>;
    authorizerCredentialsArn?: Value<string>;
    jwtConfiguration?: JWTConfigurationProps;
    authorizerResultTtlInSeconds?: Value<number>;
}