import { Value } from '../../../kloudformation/Value';

export interface DBInstanceRoleProps {
  featureName: Value<string>
  roleArn: Value<string>
}