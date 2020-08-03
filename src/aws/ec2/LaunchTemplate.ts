import { Value } from '../../kloudformation/Value';
import { LaunchTemplateDataProps } from './launchTemplate/LaunchTemplateDataProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type LaunchTemplateAttributes = { LatestVersionNumber: Attribute<string>;DefaultVersionNumber: Attribute<string> }
export function launchTemplate(launchTemplateProps: LaunchTemplate): LaunchTemplate & {attributes: LaunchTemplateAttributes} { return ({ ...launchTemplateProps, _logicalType: 'AWS::EC2::LaunchTemplate', attributes: { LatestVersionNumber: 'LatestVersionNumber',DefaultVersionNumber: 'DefaultVersionNumber' } }) }
   
export interface LaunchTemplate extends KloudResource {
  launchTemplateName?: Value<string>
  launchTemplateData?: LaunchTemplateDataProps
}