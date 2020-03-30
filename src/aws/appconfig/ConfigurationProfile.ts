import { Value } from '../../kloudformation/Value';
import { ValidatorsProps } from './configurationprofile/ValidatorsProps';
import { TagsProps } from './configurationprofile/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function configurationProfile(configurationProfileProps: ConfigurationProfile & { logicalName?: string }): ConfigurationProfile { return ({ ...configurationProfileProps, _logicalType: 'AWS::AppConfig::ConfigurationProfile' }) as unknown as ConfigurationProfile }

export interface ConfigurationProfile extends KloudResource {
    locationUri: Value<string>;
    applicationId: Value<string>;
    name: Value<string>;
    description?: Value<string>;
    validators?: ValidatorsProps[];
    retrievalRoleArn?: Value<string>;
    tags?: TagsProps[];
}