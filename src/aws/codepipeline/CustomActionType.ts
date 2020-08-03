import { Value } from '../../kloudformation/Value';
import { ConfigurationPropertiesProps } from './customActionType/ConfigurationPropertiesProps';
import { ArtifactDetailsProps } from './customActionType/ArtifactDetailsProps';
import { SettingsProps } from './customActionType/SettingsProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function customActionType(customActionTypeProps: CustomActionType): CustomActionType { return ({ ...customActionTypeProps, _logicalType: '' }) }
  
export interface CustomActionType extends KloudResource {
  category: Value<string>
  configurationProperties?: ConfigurationPropertiesProps[]
  inputArtifactDetails: ArtifactDetailsProps
  outputArtifactDetails: ArtifactDetailsProps
  provider: Value<string>
  settings?: SettingsProps
  tags?: Tag[]
  version: Value<string>
}