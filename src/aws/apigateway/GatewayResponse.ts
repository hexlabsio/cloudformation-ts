import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function gatewayResponse(gatewayResponseProps: GatewayResponse): GatewayResponse { return ({ ...gatewayResponseProps, _logicalType: '' }) }
  
export interface GatewayResponse extends KloudResource {
  responseParameters?: Value<Value<string>[]>
  responseTemplates?: Value<Value<string>[]>
  responseType: Value<string>
  restApiId: Value<string>
  statusCode?: Value<string>
}