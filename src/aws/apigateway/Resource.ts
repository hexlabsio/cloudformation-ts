import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ResourceAttributes = {  }
export function resource(resourceProps: Resource): Resource & { attributes: ResourceAttributes } { return ({ ...resourceProps, _logicalType: 'AWS::ApiGateway::Resource', attributes: {  } }) }

export interface Resource extends KloudResource {
    parentId: Value<string>;
    pathPart: Value<string>;
    restApiId: Value<string>;
}