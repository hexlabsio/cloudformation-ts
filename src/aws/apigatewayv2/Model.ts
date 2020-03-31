import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ModelAttributes = {  }
export function model(modelProps: Model): Model & { attributes: ModelAttributes } { return ({ ...modelProps, _logicalType: 'AWS::ApiGatewayV2::Model', attributes: {  } }) }

export interface Model extends KloudResource {
    schema: Value<any>;
    apiId: Value<string>;
    name: Value<string>;
    description?: Value<string>;
    contentType?: Value<string>;
}