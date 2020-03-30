import { CognitoMemberDefinitionProps } from './CognitoMemberDefinitionProps';

export function memberDefinitionProps(memberDefinitionPropsProps: MemberDefinitionProps): MemberDefinitionProps { return (memberDefinitionPropsProps) as unknown as MemberDefinitionProps }

export interface MemberDefinitionProps {
    cognitoMemberDefinition: CognitoMemberDefinitionProps;
}