import { Value } from '../../../kloudformation/Value';

export function dBInstanceRoleProps(dBInstanceRolePropsProps: DBInstanceRoleProps): DBInstanceRoleProps { return (dBInstanceRolePropsProps) }

export interface DBInstanceRoleProps {
    featureName: Value<string>;
    roleArn: Value<string>;
}