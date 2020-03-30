import { AwsVpcConfigurationProps } from './AwsVpcConfigurationProps';

export function networkConfigurationProps(networkConfigurationPropsProps: NetworkConfigurationProps): NetworkConfigurationProps { return (networkConfigurationPropsProps) as unknown as NetworkConfigurationProps }

export interface NetworkConfigurationProps {
    awsVpcConfiguration?: AwsVpcConfigurationProps;
}