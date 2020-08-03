import { Value } from '../../../kloudformation/Value';

export interface IpAddressRequestProps {
  ip?: Value<string>
  subnetId: Value<string>
}