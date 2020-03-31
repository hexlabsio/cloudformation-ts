import { CodeProps } from './function/CodeProps';
import { Value } from '../../kloudformation/Value';
import { DeadLetterConfigProps } from './function/DeadLetterConfigProps';
import { EnvironmentProps } from '../greengrass/functiondefinition/EnvironmentProps';
import { Tag } from '../Tag';
import { TracingConfigProps } from './function/TracingConfigProps';
import { VpcConfigProps } from './function/VpcConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type FunctionAttributes = { Arn: Attribute<string> }
export function lambdaFunction(lambdaFunctionProps: Function): Function & { attributes: FunctionAttributes } { return ({ ...lambdaFunctionProps, _logicalType: 'AWS::Lambda::Function', attributes: { Arn: 'Arn' } }) }

export interface Function extends KloudResource {
    code: CodeProps;
    handler: Value<string>;
    role: Value<string>;
    runtime: Value<string>;
    deadLetterConfig?: DeadLetterConfigProps;
    description?: Value<string>;
    environment?: EnvironmentProps;
    functionName?: Value<string>;
    kmsKeyArn?: Value<string>;
    layers?: Value<Value<string>[]>;
    memorySize?: Value<number>;
    reservedConcurrentExecutions?: Value<number>;
    tags?: Tag[];
    timeout?: Value<number>;
    tracingConfig?: TracingConfigProps;
    vpcConfig?: VpcConfigProps;
}