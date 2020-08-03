import { LaunchTemplateSpecificationProps } from './LaunchTemplateSpecificationProps';
import { LaunchTemplateOverridesProps } from './LaunchTemplateOverridesProps';

export interface LaunchTemplateProps {
  launchTemplateSpecification: LaunchTemplateSpecificationProps
  overrides?: LaunchTemplateOverridesProps[]
}