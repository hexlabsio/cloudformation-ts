import { Value } from '../../../kloudformation/Value';

export interface IngressProps {
  cIDRIP?: Value<string>
  eC2SecurityGroupId?: Value<string>
  eC2SecurityGroupName?: Value<string>
  eC2SecurityGroupOwnerId?: Value<string>
}