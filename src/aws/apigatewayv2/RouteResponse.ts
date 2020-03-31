import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type RouteResponseAttributes = {  }
export function routeResponse(routeResponseProps: RouteResponse): RouteResponse & { attributes: RouteResponseAttributes } { return ({ ...routeResponseProps, _logicalType: 'AWS::ApiGatewayV2::RouteResponse', attributes: {  } }) }

export interface RouteResponse extends KloudResource {
    routeResponseKey: Value<string>;
    routeId: Value<string>;
    apiId: Value<string>;
    responseParameters?: Value<any>;
    modelSelectionExpression?: Value<string>;
    responseModels?: Value<any>;
}