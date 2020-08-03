import { Value } from '../../../kloudformation/Value';

export interface RdsDbInstanceProps {
  dbPassword: Value<string>
  dbUser: Value<string>
  rdsDbInstanceArn: Value<string>
}