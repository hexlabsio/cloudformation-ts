import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type IntegrationResponseAttributes = {  }
export function integrationResponse(integrationResponseProps: IntegrationResponse): IntegrationResponse & { attributes: IntegrationResponseAttributes } { return ({ ...integrationResponseProps, _logicalType: 'AWS::ApiGatewayV2::IntegrationResponse', attributes: {  } }) }

export interface IntegrationResponse extends KloudResource {
    integrationId: Value<string>;
    integrationResponseKey: Value<string>;
    apiId: Value<string>;
    responseTemplates?: Value<any>;
    templateSelectionExpression?: Value<string>;
    responseParameters?: Value<any>;
    contentHandlingStrategy?: Value<string>;
}