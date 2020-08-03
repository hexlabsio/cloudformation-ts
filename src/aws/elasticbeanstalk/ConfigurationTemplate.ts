import { Value } from '../../kloudformation/Value';
import { ConfigurationOptionSettingProps } from './configurationTemplate/ConfigurationOptionSettingProps';
import { SourceConfigurationProps } from './configurationTemplate/SourceConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function configurationTemplate(configurationTemplateProps: ConfigurationTemplate): ConfigurationTemplate { return ({ ...configurationTemplateProps, _logicalType: '' }) }
  
export interface ConfigurationTemplate extends KloudResource {
  applicationName: Value<string>
  description?: Value<string>
  environmentId?: Value<string>
  optionSettings?: ConfigurationOptionSettingProps[]
  platformArn?: Value<string>
  solutionStackName?: Value<string>
  sourceConfiguration?: SourceConfigurationProps
}