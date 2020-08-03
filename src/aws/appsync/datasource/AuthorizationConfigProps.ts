import { AwsIamConfigProps } from './AwsIamConfigProps';
import { Value } from '../../../kloudformation/Value';

export interface AuthorizationConfigProps {
  awsIamConfig?: AwsIamConfigProps
  authorizationType: Value<string>
}