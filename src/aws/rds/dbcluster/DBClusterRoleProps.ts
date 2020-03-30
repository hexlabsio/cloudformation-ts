import { Value } from '../../../kloudformation/Value';

export function dBClusterRoleProps(dBClusterRolePropsProps: DBClusterRoleProps): DBClusterRoleProps { return (dBClusterRolePropsProps) as unknown as DBClusterRoleProps }

export interface DBClusterRoleProps {
    roleArn: Value<string>;
    featureName?: Value<string>;
}