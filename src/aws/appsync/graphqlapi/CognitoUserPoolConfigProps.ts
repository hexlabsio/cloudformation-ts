import { Value } from '../../../kloudformation/Value';

export interface CognitoUserPoolConfigProps {
  appIdClientRegex?: Value<string>
  userPoolId?: Value<string>
  awsRegion?: Value<string>
}