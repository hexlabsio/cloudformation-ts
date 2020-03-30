import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function parameter(parameterProps: Parameter & { logicalName?: string }): Parameter { return ({ ...parameterProps, _logicalType: 'AWS::SSM::Parameter' }) as unknown as Parameter }

export interface Parameter extends KloudResource {
    type: Value<string>;
    value: Value<string>;
    description?: Value<string>;
    policies?: Value<string>;
    allowedPattern?: Value<string>;
    tier?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}