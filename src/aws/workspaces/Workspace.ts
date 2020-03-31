import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { WorkspacePropertiesProps } from './workspace/WorkspacePropertiesProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type WorkspaceAttributes = {  }
export function workspace(workspaceProps: Workspace): Workspace & { attributes: WorkspaceAttributes } { return ({ ...workspaceProps, _logicalType: 'AWS::WorkSpaces::Workspace', attributes: {  } }) }

export interface Workspace extends KloudResource {
    bundleId: Value<string>;
    directoryId: Value<string>;
    userName: Value<string>;
    rootVolumeEncryptionEnabled?: Value<boolean>;
    tags?: Tag[];
    userVolumeEncryptionEnabled?: Value<boolean>;
    volumeEncryptionKey?: Value<string>;
    workspaceProperties?: WorkspacePropertiesProps;
}