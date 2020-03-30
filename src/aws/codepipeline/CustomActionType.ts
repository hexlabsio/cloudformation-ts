import { Value } from '../../kloudformation/Value';
import { ArtifactDetailsProps } from './customactiontype/ArtifactDetailsProps';
import { ConfigurationPropertiesProps } from './customactiontype/ConfigurationPropertiesProps';
import { SettingsProps } from './customactiontype/SettingsProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function customActionType(customActionTypeProps: CustomActionType & { logicalName?: string }): CustomActionType { return ({ ...customActionTypeProps, _logicalType: 'AWS::CodePipeline::CustomActionType' }) as unknown as CustomActionType }

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