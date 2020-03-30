import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function integrationResponse(integrationResponseProps: IntegrationResponse & { logicalName?: string }): IntegrationResponse { return ({ ...integrationResponseProps, _logicalType: 'AWS::ApiGatewayV2::IntegrationResponse' }) as unknown as IntegrationResponse }

export interface IntegrationResponse extends KloudResource {
    integrationId: Value<string>;
    integrationResponseKey: Value<string>;
    apiId: Value<string>;
    responseTemplates?: Value<any>;
    templateSelectionExpression?: Value<string>;
    responseParameters?: Value<any>;
    contentHandlingStrategy?: Value<string>;
}