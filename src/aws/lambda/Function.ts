import { CodeProps } from './function/CodeProps';
import { DeadLetterConfigProps } from './function/DeadLetterConfigProps';
import { Value } from '../../kloudformation/Value';
import { EnvironmentProps } from './function/EnvironmentProps';
import { FileSystemConfigProps } from './function/FileSystemConfigProps';
import { Tag } from '../Tag';
import { TracingConfigProps } from './function/TracingConfigProps';
import { VpcConfigProps } from './function/VpcConfigProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type FunctionAttributes = { Arn: Attribute<string> }
export function lambdaFunction(functionProps: Function): Function & {attributes: FunctionAttributes} { return ({ ...functionProps, _logicalType: 'AWS::Lambda::Function', attributes: { Arn: 'Arn' } }) }
   
export interface Function extends KloudResource {
  code: CodeProps
  deadLetterConfig?: DeadLetterConfigProps
  description?: Value<string>
  environment?: EnvironmentProps
  fileSystemConfigs?: FileSystemConfigProps[]
  functionName?: Value<string>
  handler: Value<string>
  kmsKeyArn?: Value<string>
  layers?: Value<Value<string>[]>
  memorySize?: Value<number>
  reservedConcurrentExecutions?: Value<number>
  role: Value<string>
  runtime: Value<string>
  tags?: Tag[]
  timeout?: Value<number>
  tracingConfig?: TracingConfigProps
  vpcConfig?: VpcConfigProps
}