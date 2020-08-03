import { Value } from '../../../kloudformation/Value';

export interface LifecycleHookSpecificationProps {
  defaultResult?: Value<string>
  heartbeatTimeout?: Value<number>
  lifecycleHookName: Value<string>
  lifecycleTransition: Value<string>
  notificationMetadata?: Value<string>
  notificationTargetARN?: Value<string>
  roleARN?: Value<string>
}