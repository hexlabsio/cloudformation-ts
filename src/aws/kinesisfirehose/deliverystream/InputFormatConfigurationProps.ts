import { DeserializerProps } from './DeserializerProps';

export function inputFormatConfigurationProps(inputFormatConfigurationPropsProps: InputFormatConfigurationProps): InputFormatConfigurationProps { return (inputFormatConfigurationPropsProps) as unknown as InputFormatConfigurationProps }

export interface InputFormatConfigurationProps {
    deserializer: DeserializerProps;
}