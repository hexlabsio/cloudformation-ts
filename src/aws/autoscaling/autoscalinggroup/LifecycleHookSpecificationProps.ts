import { Value } from '../../../kloudformation/Value';

export function lifecycleHookSpecificationProps(lifecycleHookSpecificationPropsProps: LifecycleHookSpecificationProps): LifecycleHookSpecificationProps { return (lifecycleHookSpecificationPropsProps) as unknown as LifecycleHookSpecificationProps }

export interface LifecycleHookSpecificationProps {
    lifecycleHookName: Value<string>;
    lifecycleTransition: Value<string>;
    defaultResult?: Value<string>;
    heartbeatTimeout?: Value<number>;
    notificationMetadata?: Value<string>;
    notificationTargetARN?: Value<string>;
    roleARN?: Value<string>;
}