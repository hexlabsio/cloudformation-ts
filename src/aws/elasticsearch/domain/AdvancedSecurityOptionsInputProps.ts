import { Value } from '../../../kloudformation/Value';
import { MasterUserOptionsProps } from './MasterUserOptionsProps';

export interface AdvancedSecurityOptionsInputProps {
  enabled?: Value<boolean>
  internalUserDatabaseEnabled?: Value<boolean>
  masterUserOptions?: MasterUserOptionsProps
}