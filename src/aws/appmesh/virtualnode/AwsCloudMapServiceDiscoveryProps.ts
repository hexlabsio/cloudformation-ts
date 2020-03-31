import { Value } from '../../../kloudformation/Value';
import { AwsCloudMapInstanceAttributeProps } from './AwsCloudMapInstanceAttributeProps';

export function awsCloudMapServiceDiscoveryProps(awsCloudMapServiceDiscoveryPropsProps: AwsCloudMapServiceDiscoveryProps): AwsCloudMapServiceDiscoveryProps { return (awsCloudMapServiceDiscoveryPropsProps) }

export interface AwsCloudMapServiceDiscoveryProps {
    namespaceName: Value<string>;
    serviceName: Value<string>;
    attributes?: AwsCloudMapInstanceAttributeProps[];
}