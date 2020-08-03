import { Value } from '../../kloudformation/Value';
import { BlockDeviceMappingProps } from './launchConfiguration/BlockDeviceMappingProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function launchConfiguration(launchConfigurationProps: LaunchConfiguration): LaunchConfiguration { return ({ ...launchConfigurationProps, _logicalType: '' }) }
  
export interface LaunchConfiguration extends KloudResource {
  associatePublicIpAddress?: Value<boolean>
  blockDeviceMappings?: BlockDeviceMappingProps[]
  classicLinkVPCId?: Value<string>
  classicLinkVPCSecurityGroups?: Value<Value<string>[]>
  ebsOptimized?: Value<boolean>
  iamInstanceProfile?: Value<string>
  imageId: Value<string>
  instanceId?: Value<string>
  instanceMonitoring?: Value<boolean>
  instanceType: Value<string>
  kernelId?: Value<string>
  keyName?: Value<string>
  launchConfigurationName?: Value<string>
  placementTenancy?: Value<string>
  ramDiskId?: Value<string>
  securityGroups?: Value<Value<string>[]>
  spotPrice?: Value<string>
  userData?: Value<string>
}