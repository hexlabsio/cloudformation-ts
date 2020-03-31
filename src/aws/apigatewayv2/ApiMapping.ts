import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ApiMappingAttributes = {  }
export function apiMapping(apiMappingProps: ApiMapping): ApiMapping & { attributes: ApiMappingAttributes } { return ({ ...apiMappingProps, _logicalType: 'AWS::ApiGatewayV2::ApiMapping', attributes: {  } }) }

export interface ApiMapping extends KloudResource {
    domainName: Value<string>;
    stage: Value<string>;
    apiId: Value<string>;
    apiMappingKey?: Value<string>;
}