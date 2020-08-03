import { Value } from '../../../kloudformation/Value';

export interface ResourcesVpcConfigProps {
  securityGroupIds?: Value<Value<string>[]>
  subnetIds: Value<Value<string>[]>
}