import { SecurityDetailsProps } from './SecurityDetailsProps';
import { DataflowEndpointProps } from './DataflowEndpointProps';

export function endpointDetailsProps(endpointDetailsPropsProps: EndpointDetailsProps): EndpointDetailsProps { return (endpointDetailsPropsProps) as unknown as EndpointDetailsProps }

export interface EndpointDetailsProps {
    securityDetails?: SecurityDetailsProps;
    endpoint?: DataflowEndpointProps;
}