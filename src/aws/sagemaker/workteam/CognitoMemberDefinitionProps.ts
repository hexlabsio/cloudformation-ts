import { Value } from '../../../kloudformation/Value';

export function cognitoMemberDefinitionProps(cognitoMemberDefinitionPropsProps: CognitoMemberDefinitionProps): CognitoMemberDefinitionProps { return (cognitoMemberDefinitionPropsProps) }

export interface CognitoMemberDefinitionProps {
    cognitoUserPool: Value<string>;
    cognitoClientId: Value<string>;
    cognitoUserGroup: Value<string>;
}