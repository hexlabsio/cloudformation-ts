import { Value } from '../../../kloudformation/Value';

export function rdsDbInstanceProps(rdsDbInstancePropsProps: RdsDbInstanceProps): RdsDbInstanceProps { return (rdsDbInstancePropsProps) }

export interface RdsDbInstanceProps {
    dbPassword: Value<string>;
    dbUser: Value<string>;
    rdsDbInstanceArn: Value<string>;
}