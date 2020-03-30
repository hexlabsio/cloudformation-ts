import { Value } from '../../../kloudformation/Value';

export function lifecyclePolicyProps(lifecyclePolicyPropsProps: LifecyclePolicyProps): LifecyclePolicyProps { return (lifecyclePolicyPropsProps) as unknown as LifecyclePolicyProps }

export interface LifecyclePolicyProps {
    lifecyclePolicyText?: Value<string>;
    registryId?: Value<string>;
}