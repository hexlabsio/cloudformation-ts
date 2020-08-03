import { Value } from '../../../kloudformation/Value';
import { LaunchTemplateSpecificationProps } from './LaunchTemplateSpecificationProps';

export interface ComputeResourcesProps {
  spotIamFleetRole?: Value<string>
  maxvCpus: Value<number>
  bidPercentage?: Value<number>
  securityGroupIds?: Value<Value<string>[]>
  subnets: Value<Value<string>[]>
  type: Value<string>
  allocationStrategy?: Value<string>
  minvCpus: Value<number>
  launchTemplate?: LaunchTemplateSpecificationProps
  imageId?: Value<string>
  instanceRole: Value<string>
  instanceTypes: Value<Value<string>[]>
  ec2KeyPair?: Value<string>
  placementGroup?: Value<string>
  tags?: Value<any>
  desiredvCpus?: Value<number>
}