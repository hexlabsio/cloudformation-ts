import { Value } from '../../../kloudformation/Value';

export function awsIamConfigProps(awsIamConfigPropsProps: AwsIamConfigProps): AwsIamConfigProps { return (awsIamConfigPropsProps) }

export interface AwsIamConfigProps {
    signingRegion?: Value<string>;
    signingServiceName?: Value<string>;
}