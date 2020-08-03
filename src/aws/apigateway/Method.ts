import { Value } from '../../kloudformation/Value';
import { IntegrationProps } from './method/IntegrationProps';
import { MethodResponseProps } from './method/MethodResponseProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function method(methodProps: Method): Method { return ({ ...methodProps, _logicalType: '' }) }
  
export interface Method extends KloudResource {
  apiKeyRequired?: Value<boolean>
  authorizationScopes?: Value<Value<string>[]>
  authorizationType?: Value<string>
  authorizerId?: Value<string>
  httpMethod: Value<string>
  integration?: IntegrationProps
  methodResponses?: MethodResponseProps[]
  operationName?: Value<string>
  requestModels?: Value<Value<string>[]>
  requestParameters?: Value<Value<boolean>[]>
  requestValidatorId?: Value<string>
  resourceId: Value<string>
  restApiId: Value<string>
}