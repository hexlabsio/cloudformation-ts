import { Value } from '../../../kloudformation/Value';
import { KeyValuePairProps } from './KeyValuePairProps';

export interface ProxyConfigurationProps {
  containerName: Value<string>
  proxyConfigurationProperties?: KeyValuePairProps[]
  type?: Value<string>
}