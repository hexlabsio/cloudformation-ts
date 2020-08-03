import { Value } from '../../../kloudformation/Value';
import { RulesConfigurationTypeProps } from './RulesConfigurationTypeProps';

export interface RoleMappingProps {
  type: Value<string>
  ambiguousRoleResolution?: Value<string>
  rulesConfiguration?: RulesConfigurationTypeProps
  identityProvider?: Value<string>
}