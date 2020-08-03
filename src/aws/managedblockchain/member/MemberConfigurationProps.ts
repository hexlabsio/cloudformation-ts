import { Value } from '../../../kloudformation/Value';
import { MemberFrameworkConfigurationProps } from './MemberFrameworkConfigurationProps';

export interface MemberConfigurationProps {
  description?: Value<string>
  memberFrameworkConfiguration?: MemberFrameworkConfigurationProps
  name: Value<string>
}