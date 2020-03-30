import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function gatewayResponse(gatewayResponseProps: GatewayResponse & { logicalName?: string }): GatewayResponse { return ({ ...gatewayResponseProps, _logicalType: 'AWS::ApiGateway::GatewayResponse' }) as unknown as GatewayResponse }

export interface GatewayResponse extends KloudResource {
    responseType: Value<string>;
    restApiId: Value<string>;
    responseParameters?: { [key: string]: Value<string> };
    responseTemplates?: { [key: string]: Value<string> };
    statusCode?: Value<string>;
}