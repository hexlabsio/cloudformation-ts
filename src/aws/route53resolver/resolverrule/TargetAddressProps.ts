import { Value } from '../../../kloudformation/Value';

export interface TargetAddressProps {
  ip: Value<string>
  port?: Value<string>
}