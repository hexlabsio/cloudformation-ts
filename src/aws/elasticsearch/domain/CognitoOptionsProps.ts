import { Value } from '../../../kloudformation/Value';

export interface CognitoOptionsProps {
  enabled?: Value<boolean>
  identityPoolId?: Value<string>
  roleArn?: Value<string>
  userPoolId?: Value<string>
}