import { Value } from '../../../kloudformation/Value';

export function dBInstanceRoleProps(dBInstanceRolePropsProps: DBInstanceRoleProps): DBInstanceRoleProps { return (dBInstanceRolePropsProps) as unknown as DBInstanceRoleProps }

export interface DBInstanceRoleProps {
    featureName: Value<string>;
    roleArn: Value<string>;
}