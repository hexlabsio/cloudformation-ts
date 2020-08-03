import { Value } from '../../../kloudformation/Value';
import { SocketAddressProps } from './SocketAddressProps';

export interface DataflowEndpointProps {
  name?: Value<string>
  address?: SocketAddressProps
  mtu?: Value<number>
}