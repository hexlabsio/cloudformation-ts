import { InputLambdaProcessorProps } from './InputLambdaProcessorProps';

export function inputProcessingConfigurationProps(inputProcessingConfigurationPropsProps: InputProcessingConfigurationProps): InputProcessingConfigurationProps { return (inputProcessingConfigurationPropsProps) }

export interface InputProcessingConfigurationProps {
    inputLambdaProcessor?: InputLambdaProcessorProps;
}