import { AuthenticationConfigurationProps } from './skill/AuthenticationConfigurationProps';
import { Value } from '../../kloudformation/Value';
import { SkillPackageProps } from './skill/SkillPackageProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function skill(skillProps: Skill): Skill { return ({ ...skillProps, _logicalType: '' }) }
  
export interface Skill extends KloudResource {
  authenticationConfiguration: AuthenticationConfigurationProps
  vendorId: Value<string>
  skillPackage: SkillPackageProps
}