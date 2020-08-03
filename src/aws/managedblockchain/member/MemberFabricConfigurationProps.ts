import { Value } from '../../../kloudformation/Value';

export interface MemberFabricConfigurationProps {
  adminUsername: Value<string>
  adminPassword: Value<string>
}