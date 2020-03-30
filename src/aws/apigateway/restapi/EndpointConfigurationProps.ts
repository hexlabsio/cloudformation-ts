import { Value } from '../../../kloudformation/Value';

export function endpointConfigurationProps(endpointConfigurationPropsProps: EndpointConfigurationProps): EndpointConfigurationProps { return (endpointConfigurationPropsProps) as unknown as EndpointConfigurationProps }

export interface EndpointConfigurationProps {
    types?: Value<Value<string>[]>;
    vpcEndpointIds?: Value<Value<string>[]>;
}