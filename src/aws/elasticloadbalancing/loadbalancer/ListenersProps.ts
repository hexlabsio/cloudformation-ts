import { Value } from '../../../kloudformation/Value';

export interface ListenersProps {
  instancePort: Value<string>
  instanceProtocol?: Value<string>
  loadBalancerPort: Value<string>
  policyNames?: Value<Value<string>[]>
  protocol: Value<string>
  sSLCertificateId?: Value<string>
}