import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function authorizer(authorizerProps: Authorizer & { logicalName?: string }): Authorizer { return ({ ...authorizerProps, _logicalType: 'AWS::ApiGateway::Authorizer' }) as unknown as Authorizer }

export interface Authorizer extends KloudResource {
    restApiId: Value<string>;
    type: Value<string>;
    authType?: Value<string>;
    authorizerCredentials?: Value<string>;
    authorizerResultTtlInSeconds?: Value<number>;
    authorizerUri?: Value<string>;
    identitySource?: Value<string>;
    identityValidationExpression?: Value<string>;
    name?: Value<string>;
    providerARNs?: Value<Value<string>[]>;
}