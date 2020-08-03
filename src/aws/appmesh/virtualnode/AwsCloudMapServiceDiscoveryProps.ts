import { Value } from '../../../kloudformation/Value';
import { AwsCloudMapInstanceAttributeProps } from './AwsCloudMapInstanceAttributeProps';

export interface AwsCloudMapServiceDiscoveryProps {
  namespaceName: Value<string>
  serviceName: Value<string>
  attributes?: AwsCloudMapInstanceAttributeProps[]
}