import { Value } from '../../../kloudformation/Value';
import { SecretProps } from './SecretProps';

export function logConfigurationProps(logConfigurationPropsProps: LogConfigurationProps): LogConfigurationProps { return (logConfigurationPropsProps) as unknown as LogConfigurationProps }

export interface LogConfigurationProps {
    logDriver: Value<string>;
    options?: { [key: string]: Value<string> };
    secretOptions?: SecretProps[];
}