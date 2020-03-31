import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type RequestValidatorAttributes = {  }
export function requestValidator(requestValidatorProps: RequestValidator): RequestValidator & { attributes: RequestValidatorAttributes } { return ({ ...requestValidatorProps, _logicalType: 'AWS::ApiGateway::RequestValidator', attributes: {  } }) }

export interface RequestValidator extends KloudResource {
    restApiId: Value<string>;
    name?: Value<string>;
    validateRequestBody?: Value<boolean>;
    validateRequestParameters?: Value<boolean>;
}