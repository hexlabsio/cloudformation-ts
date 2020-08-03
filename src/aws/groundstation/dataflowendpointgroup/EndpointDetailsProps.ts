import { SecurityDetailsProps } from './SecurityDetailsProps';
import { DataflowEndpointProps } from './DataflowEndpointProps';

export interface EndpointDetailsProps {
  securityDetails?: SecurityDetailsProps
  endpoint?: DataflowEndpointProps
}