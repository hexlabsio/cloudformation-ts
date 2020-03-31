import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ModelAttributes = {  }
export function model(modelProps: Model): Model & { attributes: ModelAttributes } { return ({ ...modelProps, _logicalType: 'AWS::ApiGateway::Model', attributes: {  } }) }

export interface Model extends KloudResource {
    restApiId: Value<string>;
    contentType?: Value<string>;
    description?: Value<string>;
    name?: Value<string>;
    schema?: Value<any>;
}