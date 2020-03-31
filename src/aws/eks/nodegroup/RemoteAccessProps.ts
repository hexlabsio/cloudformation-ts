import { Value } from '../../../kloudformation/Value';

export function remoteAccessProps(remoteAccessPropsProps: RemoteAccessProps): RemoteAccessProps { return (remoteAccessPropsProps) }

export interface RemoteAccessProps {
    ec2SshKey: Value<string>;
    sourceSecurityGroups?: Value<Value<string>[]>;
}