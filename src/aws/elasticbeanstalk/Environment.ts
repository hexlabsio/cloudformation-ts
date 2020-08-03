import { Value } from '../../kloudformation/Value';
import { OptionSettingProps } from './environment/OptionSettingProps';
import { Tag } from '../Tag';
import { TierProps } from './environment/TierProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type EnvironmentAttributes = { EndpointURL: Attribute<string> }
export function environment(environmentProps: Environment): Environment & {attributes: EnvironmentAttributes} { return ({ ...environmentProps, _logicalType: 'AWS::ElasticBeanstalk::Environment', attributes: { EndpointURL: 'EndpointURL' } }) }
   
export interface Environment extends KloudResource {
  applicationName: Value<string>
  cNAMEPrefix?: Value<string>
  description?: Value<string>
  environmentName?: Value<string>
  optionSettings?: OptionSettingProps[]
  platformArn?: Value<string>
  solutionStackName?: Value<string>
  tags?: Tag[]
  templateName?: Value<string>
  tier?: TierProps
  versionLabel?: Value<string>
}