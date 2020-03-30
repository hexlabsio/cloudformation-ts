import { Value } from '../../../kloudformation/Value';
import { AwsIamConfigProps } from './AwsIamConfigProps';

export function authorizationConfigProps(authorizationConfigPropsProps: AuthorizationConfigProps): AuthorizationConfigProps { return (authorizationConfigPropsProps) as unknown as AuthorizationConfigProps }

export interface AuthorizationConfigProps {
    authorizationType: Value<string>;
    awsIamConfig?: AwsIamConfigProps;
}