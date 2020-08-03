import { Value } from '../../../kloudformation/Value';

export interface CognitoMemberDefinitionProps {
  cognitoUserPool: Value<string>
  cognitoClientId: Value<string>
  cognitoUserGroup: Value<string>
}