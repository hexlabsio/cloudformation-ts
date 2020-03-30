import { SerializerProps } from './SerializerProps';

export function outputFormatConfigurationProps(outputFormatConfigurationPropsProps: OutputFormatConfigurationProps): OutputFormatConfigurationProps { return (outputFormatConfigurationPropsProps) as unknown as OutputFormatConfigurationProps }

export interface OutputFormatConfigurationProps {
    serializer: SerializerProps;
}