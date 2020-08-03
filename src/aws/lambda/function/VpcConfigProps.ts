import { Value } from '../../../kloudformation/Value';

export interface VpcConfigProps {
  securityGroupIds: Value<Value<string>[]>
  subnetIds: Value<Value<string>[]>
}