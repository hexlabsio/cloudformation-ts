import { Value } from '../../kloudformation/Value';
import { AlarmConfigurationProps } from './deploymentgroup/AlarmConfigurationProps';
import { AutoRollbackConfigurationProps } from './deploymentgroup/AutoRollbackConfigurationProps';
import { DeploymentProps } from './deploymentgroup/DeploymentProps';
import { DeploymentStyleProps } from './deploymentgroup/DeploymentStyleProps';
import { EC2TagFilterProps } from './deploymentgroup/EC2TagFilterProps';
import { EC2TagSetProps } from './deploymentgroup/EC2TagSetProps';
import { LoadBalancerInfoProps } from './deploymentgroup/LoadBalancerInfoProps';
import { TagFilterProps } from './deploymentgroup/TagFilterProps';
import { OnPremisesTagSetProps } from './deploymentgroup/OnPremisesTagSetProps';
import { TriggerConfigProps } from './deploymentgroup/TriggerConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function deploymentGroup(deploymentGroupProps: DeploymentGroup & { logicalName?: string }): DeploymentGroup { return ({ ...deploymentGroupProps, _logicalType: 'AWS::CodeDeploy::DeploymentGroup' }) as unknown as DeploymentGroup }

export interface DeploymentGroup extends KloudResource {
    applicationName: Value<string>;
    serviceRoleArn: Value<string>;
    alarmConfiguration?: AlarmConfigurationProps;
    autoRollbackConfiguration?: AutoRollbackConfigurationProps;
    autoScalingGroups?: Value<Value<string>[]>;
    deployment?: DeploymentProps;
    deploymentConfigName?: Value<string>;
    deploymentGroupName?: Value<string>;
    deploymentStyle?: DeploymentStyleProps;
    ec2TagFilters?: EC2TagFilterProps[];
    ec2TagSet?: EC2TagSetProps;
    loadBalancerInfo?: LoadBalancerInfoProps;
    onPremisesInstanceTagFilters?: TagFilterProps[];
    onPremisesTagSet?: OnPremisesTagSetProps;
    triggerConfigurations?: TriggerConfigProps[];
}