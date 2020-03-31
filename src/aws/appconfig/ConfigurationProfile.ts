import { Value } from '../../kloudformation/Value';
import { ValidatorsProps } from './configurationprofile/ValidatorsProps';
import { TagsProps } from './configurationprofile/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ConfigurationProfileAttributes = {  }
export function configurationProfile(configurationProfileProps: ConfigurationProfile): ConfigurationProfile & { attributes: ConfigurationProfileAttributes } { return ({ ...configurationProfileProps, _logicalType: 'AWS::AppConfig::ConfigurationProfile', attributes: {  } }) }

export interface ConfigurationProfile extends KloudResource {
    locationUri: Value<string>;
    applicationId: Value<string>;
    name: Value<string>;
    description?: Value<string>;
    validators?: ValidatorsProps[];
    retrievalRoleArn?: Value<string>;
    tags?: TagsProps[];
}