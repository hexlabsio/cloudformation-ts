import { Value } from '../../../kloudformation/Value';

export function userPoolConfigProps(userPoolConfigPropsProps: UserPoolConfigProps): UserPoolConfigProps { return (userPoolConfigPropsProps) }

export interface UserPoolConfigProps {
    appIdClientRegex?: Value<string>;
    userPoolId?: Value<string>;
    awsRegion?: Value<string>;
    defaultAction?: Value<string>;
}