import { Value } from '../../kloudformation/Value';
import { LaunchTemplateDataProps } from './launchtemplate/LaunchTemplateDataProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type LaunchTemplateAttributes = { LatestVersionNumber: Attribute<string>; DefaultVersionNumber: Attribute<string> }
export function launchTemplate(launchTemplateProps: LaunchTemplate): LaunchTemplate & { attributes: LaunchTemplateAttributes } { return ({ ...launchTemplateProps, _logicalType: 'AWS::EC2::LaunchTemplate', attributes: { LatestVersionNumber: 'LatestVersionNumber', DefaultVersionNumber: 'DefaultVersionNumber' } }) }

export interface LaunchTemplate extends KloudResource {
    launchTemplateName?: Value<string>;
    launchTemplateData?: LaunchTemplateDataProps;
}