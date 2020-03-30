import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function apiMapping(apiMappingProps: ApiMapping & { logicalName?: string }): ApiMapping { return ({ ...apiMappingProps, _logicalType: 'AWS::ApiGatewayV2::ApiMapping' }) as unknown as ApiMapping }

export interface ApiMapping extends KloudResource {
    domainName: Value<string>;
    stage: Value<string>;
    apiId: Value<string>;
    apiMappingKey?: Value<string>;
}