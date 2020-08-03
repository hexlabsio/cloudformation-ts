import { Value } from '../../../kloudformation/Value';

export interface LaunchTemplateSpecificationProps {
  launchTemplateId?: Value<string>
  launchTemplateName?: Value<string>
  version: Value<string>
}