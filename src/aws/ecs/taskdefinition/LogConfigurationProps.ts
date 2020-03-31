import { Value } from '../../../kloudformation/Value';
import { SecretProps } from './SecretProps';

export function logConfigurationProps(logConfigurationPropsProps: LogConfigurationProps): LogConfigurationProps { return (logConfigurationPropsProps) }

export interface LogConfigurationProps {
    logDriver: Value<string>;
    options?: { [key: string]: Value<string> };
    secretOptions?: SecretProps[];
}