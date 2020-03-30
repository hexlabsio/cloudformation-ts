import { Value } from '../../../kloudformation/Value';
import { InputSchemaProps } from '../../kinesisanalytics/application/InputSchemaProps';
import { KinesisStreamsInputProps } from '../../kinesisanalytics/application/KinesisStreamsInputProps';
import { KinesisFirehoseInputProps } from '../../kinesisanalytics/application/KinesisFirehoseInputProps';
import { InputProcessingConfigurationProps } from '../../kinesisanalytics/application/InputProcessingConfigurationProps';
import { InputParallelismProps } from '../../kinesisanalytics/application/InputParallelismProps';

export function inputProps(inputPropsProps: InputProps): InputProps { return (inputPropsProps) as unknown as InputProps }

export interface InputProps {
    namePrefix: Value<string>;
    inputSchema: InputSchemaProps;
    kinesisStreamsInput?: KinesisStreamsInputProps;
    kinesisFirehoseInput?: KinesisFirehoseInputProps;
    inputProcessingConfiguration?: InputProcessingConfigurationProps;
    inputParallelism?: InputParallelismProps;
}