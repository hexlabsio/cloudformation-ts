import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function lifecycleHook(lifecycleHookProps: LifecycleHook): LifecycleHook { return ({ ...lifecycleHookProps, _logicalType: '' }) }
  
export interface LifecycleHook extends KloudResource {
  autoScalingGroupName: Value<string>
  defaultResult?: Value<string>
  heartbeatTimeout?: Value<number>
  lifecycleHookName?: Value<string>
  lifecycleTransition: Value<string>
  notificationMetadata?: Value<string>
  notificationTargetARN?: Value<string>
  roleARN?: Value<string>
}