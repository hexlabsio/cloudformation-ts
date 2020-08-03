import { Value } from '../../../kloudformation/Value';

export interface IpPermissionProps {
  fromPort: Value<number>
  ipRange: Value<string>
  protocol: Value<string>
  toPort: Value<number>
}