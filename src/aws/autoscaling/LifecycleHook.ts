import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type LifecycleHookAttributes = {  }
export function lifecycleHook(lifecycleHookProps: LifecycleHook): LifecycleHook & { attributes: LifecycleHookAttributes } { return ({ ...lifecycleHookProps, _logicalType: 'AWS::AutoScaling::LifecycleHook', attributes: {  } }) }

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