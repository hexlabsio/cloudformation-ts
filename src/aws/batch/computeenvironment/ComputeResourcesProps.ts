import { Value } from '../../../kloudformation/Value';
import { LaunchTemplateSpecificationProps } from './LaunchTemplateSpecificationProps';

export function computeResourcesProps(computeResourcesPropsProps: ComputeResourcesProps): ComputeResourcesProps { return (computeResourcesPropsProps) as unknown as ComputeResourcesProps }

export interface ComputeResourcesProps {
    maxvCpus: Value<number>;
    subnets: Value<Value<string>[]>;
    type: Value<string>;
    minvCpus: Value<number>;
    instanceRole: Value<string>;
    instanceTypes: Value<Value<string>[]>;
    spotIamFleetRole?: Value<string>;
    bidPercentage?: Value<number>;
    securityGroupIds?: Value<Value<string>[]>;
    allocationStrategy?: Value<string>;
    launchTemplate?: LaunchTemplateSpecificationProps;
    imageId?: Value<string>;
    ec2KeyPair?: Value<string>;
    placementGroup?: Value<string>;
    tags?: Value<any>;
    desiredvCpus?: Value<number>;
}