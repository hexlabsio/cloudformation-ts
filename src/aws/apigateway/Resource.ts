import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function resource(resourceProps: Resource & { logicalName?: string }): Resource { return ({ ...resourceProps, _logicalType: 'AWS::ApiGateway::Resource' }) as unknown as Resource }

export interface Resource extends KloudResource {
    parentId: Value<string>;
    pathPart: Value<string>;
    restApiId: Value<string>;
}