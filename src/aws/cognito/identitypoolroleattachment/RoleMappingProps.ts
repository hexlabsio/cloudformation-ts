import { Value } from '../../../kloudformation/Value';
import { RulesConfigurationTypeProps } from './RulesConfigurationTypeProps';

export function roleMappingProps(roleMappingPropsProps: RoleMappingProps): RoleMappingProps { return (roleMappingPropsProps) as unknown as RoleMappingProps }

export interface RoleMappingProps {
    type: Value<string>;
    ambiguousRoleResolution?: Value<string>;
    rulesConfiguration?: RulesConfigurationTypeProps;
    identityProvider?: Value<string>;
}