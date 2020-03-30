import { Value } from '../../../kloudformation/Value';

export function launchTemplateSpecificationProps(launchTemplateSpecificationPropsProps: LaunchTemplateSpecificationProps): LaunchTemplateSpecificationProps { return (launchTemplateSpecificationPropsProps) as unknown as LaunchTemplateSpecificationProps }

export interface LaunchTemplateSpecificationProps {
    launchTemplateName?: Value<string>;
    version?: Value<string>;
    launchTemplateId?: Value<string>;
}