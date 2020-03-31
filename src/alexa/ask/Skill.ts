import { AuthenticationConfigurationProps } from './skill/AuthenticationConfigurationProps';
import { Value } from '../../kloudformation/Value';
import { SkillPackageProps } from './skill/SkillPackageProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SkillAttributes = {  }
export function skill(skillProps: Skill): Skill & { attributes: SkillAttributes } { return ({ ...skillProps, _logicalType: 'Alexa::ASK::Skill', attributes: {  } }) }

export interface Skill extends KloudResource {
    authenticationConfiguration: AuthenticationConfigurationProps;
    vendorId: Value<string>;
    skillPackage: SkillPackageProps;
}