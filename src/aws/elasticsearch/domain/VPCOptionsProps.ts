import { Value } from '../../../kloudformation/Value';

export interface VPCOptionsProps {
  securityGroupIds?: Value<Value<string>[]>
  subnetIds?: Value<Value<string>[]>
}