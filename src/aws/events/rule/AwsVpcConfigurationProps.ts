import { Value } from '../../../kloudformation/Value';

export function awsVpcConfigurationProps(awsVpcConfigurationPropsProps: AwsVpcConfigurationProps): AwsVpcConfigurationProps { return (awsVpcConfigurationPropsProps) }

export interface AwsVpcConfigurationProps {
    subnets: Value<Value<string>[]>;
    assignPublicIp?: Value<string>;
    securityGroups?: Value<Value<string>[]>;
}