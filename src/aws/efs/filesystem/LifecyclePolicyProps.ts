import { Value } from '../../../kloudformation/Value';

export function lifecyclePolicyProps(lifecyclePolicyPropsProps: LifecyclePolicyProps): LifecyclePolicyProps { return (lifecyclePolicyPropsProps) }

export interface LifecyclePolicyProps {
    transitionToIA: Value<string>;
}