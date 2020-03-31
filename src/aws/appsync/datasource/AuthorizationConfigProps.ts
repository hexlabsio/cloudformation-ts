import { Value } from '../../../kloudformation/Value';
import { AwsIamConfigProps } from './AwsIamConfigProps';

export function authorizationConfigProps(authorizationConfigPropsProps: AuthorizationConfigProps): AuthorizationConfigProps { return (authorizationConfigPropsProps) }

export interface AuthorizationConfigProps {
    authorizationType: Value<string>;
    awsIamConfig?: AwsIamConfigProps;
}