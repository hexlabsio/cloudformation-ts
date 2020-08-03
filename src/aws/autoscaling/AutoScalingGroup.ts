import { Value } from '../../kloudformation/Value';
import { LaunchTemplateSpecificationProps } from './autoScalingGroup/LaunchTemplateSpecificationProps';
import { LifecycleHookSpecificationProps } from './autoScalingGroup/LifecycleHookSpecificationProps';
import { MetricsCollectionProps } from './autoScalingGroup/MetricsCollectionProps';
import { MixedInstancesPolicyProps } from './autoScalingGroup/MixedInstancesPolicyProps';
import { NotificationConfigurationProps } from './autoScalingGroup/NotificationConfigurationProps';
import { TagPropertyProps } from './autoScalingGroup/TagPropertyProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function autoScalingGroup(autoScalingGroupProps: AutoScalingGroup): AutoScalingGroup { return ({ ...autoScalingGroupProps, _logicalType: '' }) }
  
export interface AutoScalingGroup extends KloudResource {
  autoScalingGroupName?: Value<string>
  availabilityZones?: Value<Value<string>[]>
  cooldown?: Value<string>
  desiredCapacity?: Value<string>
  healthCheckGracePeriod?: Value<number>
  healthCheckType?: Value<string>
  instanceId?: Value<string>
  launchConfigurationName?: Value<string>
  launchTemplate?: LaunchTemplateSpecificationProps
  lifecycleHookSpecificationList?: LifecycleHookSpecificationProps[]
  loadBalancerNames?: Value<Value<string>[]>
  maxInstanceLifetime?: Value<number>
  maxSize: Value<string>
  metricsCollection?: MetricsCollectionProps[]
  minSize: Value<string>
  mixedInstancesPolicy?: MixedInstancesPolicyProps
  newInstancesProtectedFromScaleIn?: Value<boolean>
  notificationConfigurations?: NotificationConfigurationProps[]
  placementGroup?: Value<string>
  serviceLinkedRoleARN?: Value<string>
  tags?: TagPropertyProps[]
  targetGroupARNs?: Value<Value<string>[]>
  terminationPolicies?: Value<Value<string>[]>
  vPCZoneIdentifier?: Value<Value<string>[]>
}