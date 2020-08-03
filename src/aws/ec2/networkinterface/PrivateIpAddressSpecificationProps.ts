import { Value } from '../../../kloudformation/Value';

export interface PrivateIpAddressSpecificationProps {
  primary: Value<boolean>
  privateIpAddress: Value<string>
}