import { Value } from '../../../kloudformation/Value';
import { InstanceFleetConfigProps } from './InstanceFleetConfigProps';
import { InstanceGroupConfigProps } from './InstanceGroupConfigProps';
import { PlacementTypeProps } from './PlacementTypeProps';

export function jobFlowInstancesConfigProps(jobFlowInstancesConfigPropsProps: JobFlowInstancesConfigProps): JobFlowInstancesConfigProps { return (jobFlowInstancesConfigPropsProps) as unknown as JobFlowInstancesConfigProps }

export interface JobFlowInstancesConfigProps {
    additionalMasterSecurityGroups?: Value<Value<string>[]>;
    additionalSlaveSecurityGroups?: Value<Value<string>[]>;
    coreInstanceFleet?: InstanceFleetConfigProps;
    coreInstanceGroup?: InstanceGroupConfigProps;
    ec2KeyName?: Value<string>;
    ec2SubnetId?: Value<string>;
    ec2SubnetIds?: Value<Value<string>[]>;
    emrManagedMasterSecurityGroup?: Value<string>;
    emrManagedSlaveSecurityGroup?: Value<string>;
    hadoopVersion?: Value<string>;
    keepJobFlowAliveWhenNoSteps?: Value<boolean>;
    masterInstanceFleet?: InstanceFleetConfigProps;
    masterInstanceGroup?: InstanceGroupConfigProps;
    placement?: PlacementTypeProps;
    serviceAccessSecurityGroup?: Value<string>;
    terminationProtected?: Value<boolean>;
}