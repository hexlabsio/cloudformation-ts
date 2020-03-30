import { Value } from '../../../kloudformation/Value';
import { ConfigurationProps } from './ConfigurationProps';

export function configurationProps(configurationPropsProps: ConfigurationProps): ConfigurationProps { return (configurationPropsProps) as unknown as ConfigurationProps }

export interface ConfigurationProps {
    classification?: Value<string>;
    configurationProperties?: { [key: string]: Value<string> };
    configurations?: ConfigurationProps[];
}