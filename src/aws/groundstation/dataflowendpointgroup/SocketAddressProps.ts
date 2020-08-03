import { Value } from '../../../kloudformation/Value';

export interface SocketAddressProps {
  name?: Value<string>
  port?: Value<number>
}