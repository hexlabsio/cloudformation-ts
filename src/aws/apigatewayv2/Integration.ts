import { Value } from '../../kloudformation/Value';
import { TlsConfigProps } from './integration/TlsConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function integration(integrationProps: Integration): Integration { return ({ ...integrationProps, _logicalType: '' }) }
  
export interface Integration extends KloudResource {
  description?: Value<string>
  templateSelectionExpression?: Value<string>
  connectionType?: Value<string>
  integrationMethod?: Value<string>
  passthroughBehavior?: Value<string>
  requestParameters?: Value<any>
  connectionId?: Value<string>
  integrationUri?: Value<string>
  payloadFormatVersion?: Value<string>
  credentialsArn?: Value<string>
  requestTemplates?: Value<any>
  timeoutInMillis?: Value<number>
  tlsConfig?: TlsConfigProps
  contentHandlingStrategy?: Value<string>
  apiId: Value<string>
  integrationType: Value<string>
}