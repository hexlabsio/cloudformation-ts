import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { WorkspacePropertiesProps } from './workspace/WorkspacePropertiesProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function workspace(workspaceProps: Workspace): Workspace { return ({ ...workspaceProps, _logicalType: '' }) }
  
export interface Workspace extends KloudResource {
  bundleId: Value<string>
  directoryId: Value<string>
  rootVolumeEncryptionEnabled?: Value<boolean>
  tags?: Tag[]
  userName: Value<string>
  userVolumeEncryptionEnabled?: Value<boolean>
  volumeEncryptionKey?: Value<string>
  workspaceProperties?: WorkspacePropertiesProps
}