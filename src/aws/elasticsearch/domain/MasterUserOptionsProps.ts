import { Value } from '../../../kloudformation/Value';

export interface MasterUserOptionsProps {
  masterUserARN?: Value<string>
  masterUserName?: Value<string>
  masterUserPassword?: Value<string>
}