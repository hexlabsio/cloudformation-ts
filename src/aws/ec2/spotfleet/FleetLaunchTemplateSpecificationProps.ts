import { Value } from '../../../kloudformation/Value';

export interface FleetLaunchTemplateSpecificationProps {
  launchTemplateId?: Value<string>
  launchTemplateName?: Value<string>
  version: Value<string>
}