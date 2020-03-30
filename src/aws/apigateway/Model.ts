import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function model(modelProps: Model & { logicalName?: string }): Model { return ({ ...modelProps, _logicalType: 'AWS::ApiGateway::Model' }) as unknown as Model }

export interface Model extends KloudResource {
    restApiId: Value<string>;
    contentType?: Value<string>;
    description?: Value<string>;
    name?: Value<string>;
    schema?: Value<any>;
}