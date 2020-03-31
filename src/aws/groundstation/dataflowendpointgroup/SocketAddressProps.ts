import { Value } from '../../../kloudformation/Value';

export function socketAddressProps(socketAddressPropsProps: SocketAddressProps): SocketAddressProps { return (socketAddressPropsProps) }

export interface SocketAddressProps {
    name?: Value<string>;
    port?: Value<number>;
}