import { Value } from '../../../kloudformation/Value';

export interface VPCConfigProps {
  vpcId?: Value<string>
  subnetIds: Value<Value<string>[]>
  securityGroupIds: Value<Value<string>[]>
}