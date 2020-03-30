import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function model(modelProps: Model & { logicalName?: string }): Model { return ({ ...modelProps, _logicalType: 'AWS::ApiGatewayV2::Model' }) as unknown as Model }

export interface Model extends KloudResource {
    schema: Value<any>;
    apiId: Value<string>;
    name: Value<string>;
    description?: Value<string>;
    contentType?: Value<string>;
}