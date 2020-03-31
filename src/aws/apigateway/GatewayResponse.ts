import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type GatewayResponseAttributes = {  }
export function gatewayResponse(gatewayResponseProps: GatewayResponse): GatewayResponse & { attributes: GatewayResponseAttributes } { return ({ ...gatewayResponseProps, _logicalType: 'AWS::ApiGateway::GatewayResponse', attributes: {  } }) }

export interface GatewayResponse extends KloudResource {
    responseType: Value<string>;
    restApiId: Value<string>;
    responseParameters?: { [key: string]: Value<string> };
    responseTemplates?: { [key: string]: Value<string> };
    statusCode?: Value<string>;
}