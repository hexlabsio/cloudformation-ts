import { Value } from '../../../kloudformation/Value';

export interface AwsVpcConfigurationProps {
  assignPublicIp?: Value<string>
  securityGroups?: Value<Value<string>[]>
  subnets: Value<Value<string>[]>
}