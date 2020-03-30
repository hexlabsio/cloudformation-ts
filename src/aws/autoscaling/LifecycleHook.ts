import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function lifecycleHook(lifecycleHookProps: LifecycleHook & { logicalName?: string }): LifecycleHook { return ({ ...lifecycleHookProps, _logicalType: 'AWS::AutoScaling::LifecycleHook' }) as unknown as LifecycleHook }

export interface LifecycleHook extends KloudResource {
    autoScalingGroupName: Value<string>;
    lifecycleTransition: Value<string>;
    defaultResult?: Value<string>;
    heartbeatTimeout?: Value<number>;
    lifecycleHookName?: Value<string>;
    notificationMetadata?: Value<string>;
    notificationTargetARN?: Value<string>;
    roleARN?: Value<string>;
}