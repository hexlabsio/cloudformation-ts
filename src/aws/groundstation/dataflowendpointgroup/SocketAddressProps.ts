import { Value } from '../../../kloudformation/Value';

export function socketAddressProps(socketAddressPropsProps: SocketAddressProps): SocketAddressProps { return (socketAddressPropsProps) as unknown as SocketAddressProps }

export interface SocketAddressProps {
    name?: Value<string>;
    port?: Value<number>;
}