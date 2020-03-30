import { InputLambdaProcessorProps } from './InputLambdaProcessorProps';

export function inputProcessingConfigurationProps(inputProcessingConfigurationPropsProps: InputProcessingConfigurationProps): InputProcessingConfigurationProps { return (inputProcessingConfigurationPropsProps) as unknown as InputProcessingConfigurationProps }

export interface InputProcessingConfigurationProps {
    inputLambdaProcessor?: InputLambdaProcessorProps;
}