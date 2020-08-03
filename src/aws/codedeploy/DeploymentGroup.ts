import { AlarmConfigurationProps } from './deploymentGroup/AlarmConfigurationProps';
import { Value } from '../../kloudformation/Value';
import { AutoRollbackConfigurationProps } from './deploymentGroup/AutoRollbackConfigurationProps';
import { DeploymentProps } from './deploymentGroup/DeploymentProps';
import { DeploymentStyleProps } from './deploymentGroup/DeploymentStyleProps';
import { EC2TagFilterProps } from './deploymentGroup/EC2TagFilterProps';
import { EC2TagSetProps } from './deploymentGroup/EC2TagSetProps';
import { LoadBalancerInfoProps } from './deploymentGroup/LoadBalancerInfoProps';
import { TagFilterProps } from './deploymentGroup/TagFilterProps';
import { OnPremisesTagSetProps } from './deploymentGroup/OnPremisesTagSetProps';
import { TriggerConfigProps } from './deploymentGroup/TriggerConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function deploymentGroup(deploymentGroupProps: DeploymentGroup): DeploymentGroup { return ({ ...deploymentGroupProps, _logicalType: '' }) }
  
export interface DeploymentGroup extends KloudResource {
  alarmConfiguration?: AlarmConfigurationProps
  applicationName: Value<string>
  autoRollbackConfiguration?: AutoRollbackConfigurationProps
  autoScalingGroups?: Value<Value<string>[]>
  deployment?: DeploymentProps
  deploymentConfigName?: Value<string>
  deploymentGroupName?: Value<string>
  deploymentStyle?: DeploymentStyleProps
  ec2TagFilters?: EC2TagFilterProps[]
  ec2TagSet?: EC2TagSetProps
  loadBalancerInfo?: LoadBalancerInfoProps
  onPremisesInstanceTagFilters?: TagFilterProps[]
  onPremisesTagSet?: OnPremisesTagSetProps
  serviceRoleArn: Value<string>
  triggerConfigurations?: TriggerConfigProps[]
}