import { Value } from '../../kloudformation/Value';
import { LustreConfigurationProps } from './fileSystem/LustreConfigurationProps';
import { Tag } from '../Tag';
import { WindowsConfigurationProps } from './fileSystem/WindowsConfigurationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type FileSystemAttributes = { LustreMountName: Attribute<string> }
export function fileSystem(fileSystemProps: FileSystem): FileSystem & {attributes: FileSystemAttributes} { return ({ ...fileSystemProps, _logicalType: 'AWS::FSx::FileSystem', attributes: { LustreMountName: 'LustreMountName' } }) }
   
export interface FileSystem extends KloudResource {
  storageType?: Value<string>
  kmsKeyId?: Value<string>
  storageCapacity?: Value<number>
  fileSystemType: Value<string>
  lustreConfiguration?: LustreConfigurationProps
  backupId?: Value<string>
  subnetIds: Value<Value<string>[]>
  securityGroupIds?: Value<Value<string>[]>
  tags?: Tag[]
  windowsConfiguration?: WindowsConfigurationProps
}