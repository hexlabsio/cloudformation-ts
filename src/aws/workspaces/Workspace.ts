import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { WorkspacePropertiesProps } from './workspace/WorkspacePropertiesProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function workspace(workspaceProps: Workspace & { logicalName?: string }): Workspace { return ({ ...workspaceProps, _logicalType: 'AWS::WorkSpaces::Workspace' }) as unknown as Workspace }

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