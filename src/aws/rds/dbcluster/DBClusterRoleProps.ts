import { Value } from '../../../kloudformation/Value';

export function dBClusterRoleProps(dBClusterRolePropsProps: DBClusterRoleProps): DBClusterRoleProps { return (dBClusterRolePropsProps) }

export interface DBClusterRoleProps {
    roleArn: Value<string>;
    featureName?: Value<string>;
}