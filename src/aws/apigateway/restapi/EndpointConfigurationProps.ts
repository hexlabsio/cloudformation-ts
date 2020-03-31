import { Value } from '../../../kloudformation/Value';

export function endpointConfigurationProps(endpointConfigurationPropsProps: EndpointConfigurationProps): EndpointConfigurationProps { return (endpointConfigurationPropsProps) }

export interface EndpointConfigurationProps {
    types?: Value<Value<string>[]>;
    vpcEndpointIds?: Value<Value<string>[]>;
}