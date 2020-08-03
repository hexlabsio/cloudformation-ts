import { Value } from '../../../kloudformation/Value';

export interface PrivateIpAddProps {
  privateIpAddress?: Value<string>
  primary?: Value<boolean>
}