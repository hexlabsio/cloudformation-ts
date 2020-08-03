import { Value } from '../../../kloudformation/Value';

export interface VpcConfigurationProps {
  roleARN: Value<string>
  subnetIds: Value<Value<string>[]>
  securityGroupIds: Value<Value<string>[]>
}