import { Value } from '../../../kloudformation/Value';

export function cognitoUserPoolConfigProps(cognitoUserPoolConfigPropsProps: CognitoUserPoolConfigProps): CognitoUserPoolConfigProps { return (cognitoUserPoolConfigPropsProps) }

export interface CognitoUserPoolConfigProps {
    appIdClientRegex?: Value<string>;
    userPoolId?: Value<string>;
    awsRegion?: Value<string>;
}