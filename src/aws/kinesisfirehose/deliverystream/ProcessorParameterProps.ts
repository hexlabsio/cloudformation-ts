import { Value } from '../../../kloudformation/Value';

export function processorParameterProps(processorParameterPropsProps: ProcessorParameterProps): ProcessorParameterProps { return (processorParameterPropsProps) as unknown as ProcessorParameterProps }

export interface ProcessorParameterProps {
    parameterName: Value<string>;
    parameterValue: Value<string>;
}