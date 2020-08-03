import { Value } from '../../../kloudformation/Value';

export interface AwsIamConfigProps {
  signingRegion?: Value<string>
  signingServiceName?: Value<string>
}