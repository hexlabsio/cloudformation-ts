import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type AuthorizerAttributes = {  }
export function authorizer(authorizerProps: Authorizer): Authorizer & { attributes: AuthorizerAttributes } { return ({ ...authorizerProps, _logicalType: 'AWS::ApiGateway::Authorizer', attributes: {  } }) }

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