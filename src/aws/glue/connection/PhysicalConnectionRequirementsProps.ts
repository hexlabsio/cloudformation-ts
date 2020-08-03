import { Value } from '../../../kloudformation/Value';

export interface PhysicalConnectionRequirementsProps {
  availabilityZone?: Value<string>
  securityGroupIdList?: Value<Value<string>[]>
  subnetId?: Value<string>
}