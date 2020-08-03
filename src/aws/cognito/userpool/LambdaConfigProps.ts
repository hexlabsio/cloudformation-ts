import { Value } from '../../../kloudformation/Value';

export interface LambdaConfigProps {
  createAuthChallenge?: Value<string>
  preAuthentication?: Value<string>
  defineAuthChallenge?: Value<string>
  preSignUp?: Value<string>
  preTokenGeneration?: Value<string>
  userMigration?: Value<string>
  postAuthentication?: Value<string>
  postConfirmation?: Value<string>
  customMessage?: Value<string>
  verifyAuthChallengeResponse?: Value<string>
}