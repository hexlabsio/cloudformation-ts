import { Value } from '../../kloudformation/Value';
import { ConfigurationOptionSettingProps } from './configurationtemplate/ConfigurationOptionSettingProps';
import { SourceConfigurationProps } from './configurationtemplate/SourceConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ConfigurationTemplateAttributes = {  }
export function configurationTemplate(configurationTemplateProps: ConfigurationTemplate): ConfigurationTemplate & { attributes: ConfigurationTemplateAttributes } { return ({ ...configurationTemplateProps, _logicalType: 'AWS::ElasticBeanstalk::ConfigurationTemplate', attributes: {  } }) }

export interface ConfigurationTemplate extends KloudResource {
    applicationName: Value<string>;
    description?: Value<string>;
    environmentId?: Value<string>;
    optionSettings?: ConfigurationOptionSettingProps[];
    platformArn?: Value<string>;
    solutionStackName?: Value<string>;
    sourceConfiguration?: SourceConfigurationProps;
}