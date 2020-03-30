import { Value } from '../../../kloudformation/Value';
import { BatchParametersProps } from './BatchParametersProps';
import { EcsParametersProps } from './EcsParametersProps';
import { InputTransformerProps } from './InputTransformerProps';
import { KinesisParametersProps } from './KinesisParametersProps';
import { RunCommandParametersProps } from './RunCommandParametersProps';
import { SqsParametersProps } from './SqsParametersProps';

export function targetProps(targetPropsProps: TargetProps): TargetProps { return (targetPropsProps) as unknown as TargetProps }

export interface TargetProps {
    arn: Value<string>;
    id: Value<string>;
    batchParameters?: BatchParametersProps;
    ecsParameters?: EcsParametersProps;
    input?: Value<string>;
    inputPath?: Value<string>;
    inputTransformer?: InputTransformerProps;
    kinesisParameters?: KinesisParametersProps;
    roleArn?: Value<string>;
    runCommandParameters?: RunCommandParametersProps;
    sqsParameters?: SqsParametersProps;
}