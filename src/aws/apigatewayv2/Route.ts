import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function route(routeProps: Route): Route { return ({ ...routeProps, _logicalType: '' }) }
  
export interface Route extends KloudResource {
  target?: Value<string>
  routeResponseSelectionExpression?: Value<string>
  authorizerId?: Value<string>
  requestModels?: Value<any>
  operationName?: Value<string>
  authorizationScopes?: Value<Value<string>[]>
  apiKeyRequired?: Value<boolean>
  routeKey: Value<string>
  authorizationType?: Value<string>
  modelSelectionExpression?: Value<string>
  apiId: Value<string>
  requestParameters?: Value<any>
}