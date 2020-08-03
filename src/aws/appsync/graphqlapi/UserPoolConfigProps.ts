import { Value } from '../../../kloudformation/Value';

export interface UserPoolConfigProps {
  appIdClientRegex?: Value<string>
  userPoolId?: Value<string>
  awsRegion?: Value<string>
  defaultAction?: Value<string>
}