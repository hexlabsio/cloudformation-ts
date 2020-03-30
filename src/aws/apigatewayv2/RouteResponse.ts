import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function routeResponse(routeResponseProps: RouteResponse & { logicalName?: string }): RouteResponse { return ({ ...routeResponseProps, _logicalType: 'AWS::ApiGatewayV2::RouteResponse' }) as unknown as RouteResponse }

export interface RouteResponse extends KloudResource {
    routeResponseKey: Value<string>;
    routeId: Value<string>;
    apiId: Value<string>;
    responseParameters?: Value<any>;
    modelSelectionExpression?: Value<string>;
    responseModels?: Value<any>;
}