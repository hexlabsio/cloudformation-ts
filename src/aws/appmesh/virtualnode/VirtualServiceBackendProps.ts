import { ClientPolicyProps } from './ClientPolicyProps';
import { Value } from '../../../kloudformation/Value';

export interface VirtualServiceBackendProps {
  clientPolicy?: ClientPolicyProps
  virtualServiceName: Value<string>
}