import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function requestValidator(requestValidatorProps: RequestValidator): RequestValidator { return ({ ...requestValidatorProps, _logicalType: '' }) }
  
export interface RequestValidator extends KloudResource {
  name?: Value<string>
  restApiId: Value<string>
  validateRequestBody?: Value<boolean>
  validateRequestParameters?: Value<boolean>
}