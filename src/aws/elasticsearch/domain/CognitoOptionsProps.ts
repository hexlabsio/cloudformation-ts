import { Value } from '../../../kloudformation/Value';

export function cognitoOptionsProps(cognitoOptionsPropsProps: CognitoOptionsProps): CognitoOptionsProps { return (cognitoOptionsPropsProps) }

export interface CognitoOptionsProps {
    enabled?: Value<boolean>;
    identityPoolId?: Value<string>;
    roleArn?: Value<string>;
    userPoolId?: Value<string>;
}