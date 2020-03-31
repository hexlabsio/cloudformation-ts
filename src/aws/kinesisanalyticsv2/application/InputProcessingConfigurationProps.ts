import { InputLambdaProcessorProps } from '../../kinesisanalytics/application/InputLambdaProcessorProps';

export function inputProcessingConfigurationProps(inputProcessingConfigurationPropsProps: InputProcessingConfigurationProps): InputProcessingConfigurationProps { return (inputProcessingConfigurationPropsProps) }

export interface InputProcessingConfigurationProps {
    inputLambdaProcessor?: InputLambdaProcessorProps;
}