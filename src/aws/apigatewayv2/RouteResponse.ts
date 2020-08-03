import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function routeResponse(routeResponseProps: RouteResponse): RouteResponse { return ({ ...routeResponseProps, _logicalType: '' }) }
  
export interface RouteResponse extends KloudResource {
  routeResponseKey: Value<string>
  responseParameters?: Value<any>
  routeId: Value<string>
  modelSelectionExpression?: Value<string>
  apiId: Value<string>
  responseModels?: Value<any>
}