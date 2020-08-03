import { Value } from '../../../kloudformation/Value';

export interface AuthorizationConfigProps {
  iAM?: Value<string>
  accessPointId?: Value<string>
}