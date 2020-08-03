import { Value } from '../../../kloudformation/Value';

export interface HostedRotationLambdaProps {
  rotationType: Value<string>
  rotationLambdaName?: Value<string>
  kmsKeyArn?: Value<string>
  masterSecretArn?: Value<string>
  vpcSecurityGroupIds?: Value<string>
  masterSecretKmsKeyArn?: Value<string>
  vpcSubnetIds?: Value<string>
}