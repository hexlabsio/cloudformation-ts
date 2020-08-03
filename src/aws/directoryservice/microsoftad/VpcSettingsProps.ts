import { Value } from '../../../kloudformation/Value';

export interface VpcSettingsProps {
  subnetIds: Value<Value<string>[]>
  vpcId: Value<string>
}