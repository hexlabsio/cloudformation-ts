import { Value } from '../../../kloudformation/Value';

export function listenersProps(listenersPropsProps: ListenersProps): ListenersProps { return (listenersPropsProps) }

export interface ListenersProps {
    instancePort: Value<string>;
    loadBalancerPort: Value<string>;
    protocol: Value<string>;
    instanceProtocol?: Value<string>;
    policyNames?: Value<Value<string>[]>;
    sSLCertificateId?: Value<string>;
}