import { Value } from '../../kloudformation/Value';
import { ArtifactDetailsProps } from './customactiontype/ArtifactDetailsProps';
import { ConfigurationPropertiesProps } from './customactiontype/ConfigurationPropertiesProps';
import { SettingsProps } from './customactiontype/SettingsProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type CustomActionTypeAttributes = {  }
export function customActionType(customActionTypeProps: CustomActionType): CustomActionType & { attributes: CustomActionTypeAttributes } { return ({ ...customActionTypeProps, _logicalType: 'AWS::CodePipeline::CustomActionType', attributes: {  } }) }

export interface CustomActionType extends KloudResource {
    category: Value<string>;
    inputArtifactDetails: ArtifactDetailsProps;
    outputArtifactDetails: ArtifactDetailsProps;
    provider: Value<string>;
    version: Value<string>;
    configurationProperties?: ConfigurationPropertiesProps[];
    settings?: SettingsProps;
    tags?: Tag[];
}