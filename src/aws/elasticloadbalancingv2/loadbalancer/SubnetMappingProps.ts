import { Value } from '../../../kloudformation/Value';

export interface SubnetMappingProps {
  allocationId?: Value<string>
  privateIPv4Address?: Value<string>
  subnetId: Value<string>
}