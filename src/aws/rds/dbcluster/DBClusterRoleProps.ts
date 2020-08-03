import { Value } from '../../../kloudformation/Value';

export interface DBClusterRoleProps {
  featureName?: Value<string>
  roleArn: Value<string>
}