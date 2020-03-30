import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function basePathMapping(basePathMappingProps: BasePathMapping & { logicalName?: string }): BasePathMapping { return ({ ...basePathMappingProps, _logicalType: 'AWS::ApiGateway::BasePathMapping' }) as unknown as BasePathMapping }

export interface BasePathMapping extends KloudResource {
    domainName: Value<string>;
    basePath?: Value<string>;
    restApiId?: Value<string>;
    stage?: Value<string>;
}