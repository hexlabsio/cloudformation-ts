import { Value } from '../../../kloudformation/Value';
import { ProcessorProps } from './ProcessorProps';

export function processingConfigurationProps(processingConfigurationPropsProps: ProcessingConfigurationProps): ProcessingConfigurationProps { return (processingConfigurationPropsProps) }

export interface ProcessingConfigurationProps {
    enabled?: Value<boolean>;
    processors?: ProcessorProps[];
}