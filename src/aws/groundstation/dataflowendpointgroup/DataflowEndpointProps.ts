import { Value } from '../../../kloudformation/Value';
import { SocketAddressProps } from './SocketAddressProps';

export function dataflowEndpointProps(dataflowEndpointPropsProps: DataflowEndpointProps): DataflowEndpointProps { return (dataflowEndpointPropsProps) as unknown as DataflowEndpointProps }

export interface DataflowEndpointProps {
    name?: Value<string>;
    address?: SocketAddressProps;
}