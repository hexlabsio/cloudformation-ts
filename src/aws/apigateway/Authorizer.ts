import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function authorizer(authorizerProps: Authorizer): Authorizer { return ({ ...authorizerProps, _logicalType: '' }) }
  
export interface Authorizer extends KloudResource {
  authType?: Value<string>
  authorizerCredentials?: Value<string>
  authorizerResultTtlInSeconds?: Value<number>
  authorizerUri?: Value<string>
  identitySource?: Value<string>
  identityValidationExpression?: Value<string>
  name?: Value<string>
  providerARNs?: Value<Value<string>[]>
  restApiId: Value<string>
  type: Value<string>
}