import { Value } from '../../kloudformation/Value';
import { JWTConfigurationProps } from './authorizer/JWTConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function authorizer(authorizerProps: Authorizer): Authorizer { return ({ ...authorizerProps, _logicalType: '' }) }
  
export interface Authorizer extends KloudResource {
  identityValidationExpression?: Value<string>
  authorizerUri?: Value<string>
  authorizerCredentialsArn?: Value<string>
  authorizerType: Value<string>
  jwtConfiguration?: JWTConfigurationProps
  authorizerResultTtlInSeconds?: Value<number>
  identitySource: Value<Value<string>[]>
  apiId: Value<string>
  name: Value<string>
}