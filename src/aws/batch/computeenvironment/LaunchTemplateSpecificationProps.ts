import { Value } from '../../../kloudformation/Value';

export interface LaunchTemplateSpecificationProps {
  launchTemplateName?: Value<string>
  version?: Value<string>
  launchTemplateId?: Value<string>
}