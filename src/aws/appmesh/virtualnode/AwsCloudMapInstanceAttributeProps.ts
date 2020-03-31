import { Value } from '../../../kloudformation/Value';

export function awsCloudMapInstanceAttributeProps(awsCloudMapInstanceAttributePropsProps: AwsCloudMapInstanceAttributeProps): AwsCloudMapInstanceAttributeProps { return (awsCloudMapInstanceAttributePropsProps) }

export interface AwsCloudMapInstanceAttributeProps {
    value: Value<string>;
    key: Value<string>;
}