import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type RouteAttributes = {  }
export function route(routeProps: Route): Route & { attributes: RouteAttributes } { return ({ ...routeProps, _logicalType: 'AWS::ApiGatewayV2::Route', attributes: {  } }) }

export interface Route extends KloudResource {
    routeKey: Value<string>;
    apiId: Value<string>;
    target?: Value<string>;
    routeResponseSelectionExpression?: Value<string>;
    authorizerId?: Value<string>;
    requestModels?: Value<any>;
    operationName?: Value<string>;
    authorizationScopes?: Value<Value<string>[]>;
    apiKeyRequired?: Value<boolean>;
    authorizationType?: Value<string>;
    modelSelectionExpression?: Value<string>;
    requestParameters?: Value<any>;
}