import { Value } from '../../../kloudformation/Value';

export interface SecurityDetailsProps {
  subnetIds?: Value<Value<string>[]>
  securityGroupIds?: Value<Value<string>[]>
  roleArn?: Value<string>
}