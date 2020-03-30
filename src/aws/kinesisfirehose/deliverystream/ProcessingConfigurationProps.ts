import { Value } from '../../../kloudformation/Value';
import { ProcessorProps } from './ProcessorProps';

export function processingConfigurationProps(processingConfigurationPropsProps: ProcessingConfigurationProps): ProcessingConfigurationProps { return (processingConfigurationPropsProps) as unknown as ProcessingConfigurationProps }

export interface ProcessingConfigurationProps {
    enabled?: Value<boolean>;
    processors?: ProcessorProps[];
}