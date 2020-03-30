import { Value } from '../../../kloudformation/Value';
import { KeyValuePairProps } from './KeyValuePairProps';

export function proxyConfigurationProps(proxyConfigurationPropsProps: ProxyConfigurationProps): ProxyConfigurationProps { return (proxyConfigurationPropsProps) as unknown as ProxyConfigurationProps }

export interface ProxyConfigurationProps {
    containerName: Value<string>;
    proxyConfigurationProperties?: KeyValuePairProps[];
    type?: Value<string>;
}