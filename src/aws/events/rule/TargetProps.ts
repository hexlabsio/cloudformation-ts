import { Value } from '../../../kloudformation/Value';
import { BatchParametersProps } from './BatchParametersProps';
import { EcsParametersProps } from './EcsParametersProps';
import { HttpParametersProps } from './HttpParametersProps';
import { InputTransformerProps } from './InputTransformerProps';
import { KinesisParametersProps } from './KinesisParametersProps';
import { RunCommandParametersProps } from './RunCommandParametersProps';
import { SqsParametersProps } from './SqsParametersProps';

export interface TargetProps {
  arn: Value<string>
  batchParameters?: BatchParametersProps
  ecsParameters?: EcsParametersProps
  httpParameters?: HttpParametersProps
  id: Value<string>
  input?: Value<string>
  inputPath?: Value<string>
  inputTransformer?: InputTransformerProps
  kinesisParameters?: KinesisParametersProps
  roleArn?: Value<string>
  runCommandParameters?: RunCommandParametersProps
  sqsParameters?: SqsParametersProps
}