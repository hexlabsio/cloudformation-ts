import { ProcessorParameterProps } from './ProcessorParameterProps';
import { Value } from '../../../kloudformation/Value';

export function processorProps(processorPropsProps: ProcessorProps): ProcessorProps { return (processorPropsProps) }

export interface ProcessorProps {
    parameters: ProcessorParameterProps[];
    type: Value<string>;
}