import { Value } from '../../kloudformation/Value';
import { TlsConfigProps } from './integration/TlsConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type IntegrationAttributes = {  }
export function integration(integrationProps: Integration): Integration & { attributes: IntegrationAttributes } { return ({ ...integrationProps, _logicalType: 'AWS::ApiGatewayV2::Integration', attributes: {  } }) }

export interface Integration extends KloudResource {
    apiId: Value<string>;
    integrationType: Value<string>;
    connectionId?: Value<string>;
    tlsConfig?: TlsConfigProps;
    description?: Value<string>;
    templateSelectionExpression?: Value<string>;
    connectionType?: Value<string>;
    integrationMethod?: Value<string>;
    passthroughBehavior?: Value<string>;
    requestParameters?: Value<any>;
    integrationUri?: Value<string>;
    payloadFormatVersion?: Value<string>;
    credentialsArn?: Value<string>;
    requestTemplates?: Value<any>;
    timeoutInMillis?: Value<number>;
    contentHandlingStrategy?: Value<string>;
}