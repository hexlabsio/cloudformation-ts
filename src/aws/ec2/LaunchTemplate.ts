import { Value } from '../../kloudformation/Value';
import { LaunchTemplateDataProps } from './launchtemplate/LaunchTemplateDataProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function launchTemplate(launchTemplateProps: LaunchTemplate & { logicalName?: string }): LaunchTemplate { return ({ ...launchTemplateProps, _logicalType: 'AWS::EC2::LaunchTemplate' }) as unknown as LaunchTemplate }

export interface LaunchTemplate extends KloudResource {
    launchTemplateName?: Value<string>;
    launchTemplateData?: LaunchTemplateDataProps;
}