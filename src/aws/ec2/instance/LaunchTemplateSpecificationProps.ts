import { Value } from '../../../kloudformation/Value';

export function launchTemplateSpecificationProps(launchTemplateSpecificationPropsProps: LaunchTemplateSpecificationProps): LaunchTemplateSpecificationProps { return (launchTemplateSpecificationPropsProps) as unknown as LaunchTemplateSpecificationProps }

export interface LaunchTemplateSpecificationProps {
    version: Value<string>;
    launchTemplateId?: Value<string>;
    launchTemplateName?: Value<string>;
}