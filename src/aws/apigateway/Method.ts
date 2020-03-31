import { Value } from '../../kloudformation/Value';
import { IntegrationProps } from './method/IntegrationProps';
import { MethodResponseProps } from './method/MethodResponseProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type MethodAttributes = {  }
export function method(methodProps: Method): Method & { attributes: MethodAttributes } { return ({ ...methodProps, _logicalType: 'AWS::ApiGateway::Method', attributes: {  } }) }

export interface Method extends KloudResource {
    httpMethod: Value<string>;
    resourceId: Value<string>;
    restApiId: Value<string>;
    apiKeyRequired?: Value<boolean>;
    authorizationScopes?: Value<Value<string>[]>;
    authorizationType?: Value<string>;
    authorizerId?: Value<string>;
    integration?: IntegrationProps;
    methodResponses?: MethodResponseProps[];
    operationName?: Value<string>;
    requestModels?: { [key: string]: Value<string> };
    requestParameters?: { [key: string]: Value<boolean> };
    requestValidatorId?: Value<string>;
}