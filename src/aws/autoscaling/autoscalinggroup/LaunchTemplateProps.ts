import { LaunchTemplateSpecificationProps } from './LaunchTemplateSpecificationProps';
import { LaunchTemplateOverridesProps } from './LaunchTemplateOverridesProps';

export function launchTemplateProps(launchTemplatePropsProps: LaunchTemplateProps): LaunchTemplateProps { return (launchTemplatePropsProps) as unknown as LaunchTemplateProps }

export interface LaunchTemplateProps {
    launchTemplateSpecification: LaunchTemplateSpecificationProps;
    overrides?: LaunchTemplateOverridesProps[];
}