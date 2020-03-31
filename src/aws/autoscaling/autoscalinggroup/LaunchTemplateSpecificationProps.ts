import { Value } from '../../../kloudformation/Value';

export function launchTemplateSpecificationProps(launchTemplateSpecificationPropsProps: LaunchTemplateSpecificationProps): LaunchTemplateSpecificationProps { return (launchTemplateSpecificationPropsProps) }

export interface LaunchTemplateSpecificationProps {
    version: Value<string>;
    launchTemplateId?: Value<string>;
    launchTemplateName?: Value<string>;
}