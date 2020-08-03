import { Value } from '../../kloudformation/Value';
import { ValidatorsProps } from './configurationProfile/ValidatorsProps';
import { TagsProps } from './configurationProfile/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function configurationProfile(configurationProfileProps: ConfigurationProfile): ConfigurationProfile { return ({ ...configurationProfileProps, _logicalType: '' }) }
  
export interface ConfigurationProfile extends KloudResource {
  locationUri: Value<string>
  description?: Value<string>
  validators?: ValidatorsProps[]
  retrievalRoleArn?: Value<string>
  applicationId: Value<string>
  tags?: TagsProps[]
  name: Value<string>
}