import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type BasePathMappingAttributes = {  }
export function basePathMapping(basePathMappingProps: BasePathMapping): BasePathMapping & { attributes: BasePathMappingAttributes } { return ({ ...basePathMappingProps, _logicalType: 'AWS::ApiGateway::BasePathMapping', attributes: {  } }) }

export interface BasePathMapping extends KloudResource {
    domainName: Value<string>;
    basePath?: Value<string>;
    restApiId?: Value<string>;
    stage?: Value<string>;
}