import { Value } from '../../../kloudformation/Value';

export interface RemoteAccessProps {
  sourceSecurityGroups?: Value<Value<string>[]>
  ec2SshKey: Value<string>
}