import { Value } from '../../../kloudformation/Value';

export interface VpcConfigProps {
  subnets: Value<Value<string>[]>
  securityGroupIds: Value<Value<string>[]>
}