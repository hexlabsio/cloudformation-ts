import { Value } from '../../../kloudformation/Value';
import { InputSchemaProps } from './InputSchemaProps';
import { KinesisStreamsInputProps } from './KinesisStreamsInputProps';
import { KinesisFirehoseInputProps } from './KinesisFirehoseInputProps';
import { InputProcessingConfigurationProps } from './InputProcessingConfigurationProps';
import { InputParallelismProps } from './InputParallelismProps';

export function inputProps(inputPropsProps: InputProps): InputProps { return (inputPropsProps) }

export interface InputProps {
    namePrefix: Value<string>;
    inputSchema: InputSchemaProps;
    kinesisStreamsInput?: KinesisStreamsInputProps;
    kinesisFirehoseInput?: KinesisFirehoseInputProps;
    inputProcessingConfiguration?: InputProcessingConfigurationProps;
    inputParallelism?: InputParallelismProps;
}