import { Value } from '../../../kloudformation/Value';

export function policiesProps(policiesPropsProps: PoliciesProps): PoliciesProps { return (policiesPropsProps) as unknown as PoliciesProps }

export interface PoliciesProps {
    attributes: Value<Value<any>[]>;
    policyName: Value<string>;
    policyType: Value<string>;
    instancePorts?: Value<Value<string>[]>;
    loadBalancerPorts?: Value<Value<string>[]>;
}