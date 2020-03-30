import { ProcessorParameterProps } from './ProcessorParameterProps';
import { Value } from '../../../kloudformation/Value';

export function processorProps(processorPropsProps: ProcessorProps): ProcessorProps { return (processorPropsProps) as unknown as ProcessorProps }

export interface ProcessorProps {
    parameters: ProcessorParameterProps[];
    type: Value<string>;
}