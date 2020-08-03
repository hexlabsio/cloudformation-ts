import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function integrationResponse(integrationResponseProps: IntegrationResponse): IntegrationResponse { return ({ ...integrationResponseProps, _logicalType: '' }) }
  
export interface IntegrationResponse extends KloudResource {
  responseTemplates?: Value<any>
  templateSelectionExpression?: Value<string>
  responseParameters?: Value<any>
  contentHandlingStrategy?: Value<string>
  integrationId: Value<string>
  integrationResponseKey: Value<string>
  apiId: Value<string>
}