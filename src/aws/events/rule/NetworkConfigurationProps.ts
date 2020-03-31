import { AwsVpcConfigurationProps } from './AwsVpcConfigurationProps';

export function networkConfigurationProps(networkConfigurationPropsProps: NetworkConfigurationProps): NetworkConfigurationProps { return (networkConfigurationPropsProps) }

export interface NetworkConfigurationProps {
    awsVpcConfiguration?: AwsVpcConfigurationProps;
}