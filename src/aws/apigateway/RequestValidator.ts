import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function requestValidator(requestValidatorProps: RequestValidator & { logicalName?: string }): RequestValidator { return ({ ...requestValidatorProps, _logicalType: 'AWS::ApiGateway::RequestValidator' }) as unknown as RequestValidator }

export interface RequestValidator extends KloudResource {
    restApiId: Value<string>;
    name?: Value<string>;
    validateRequestBody?: Value<boolean>;
    validateRequestParameters?: Value<boolean>;
}