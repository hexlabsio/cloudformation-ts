import { Value } from '../../kloudformation/Value';
import { LustreConfigurationProps } from './filesystem/LustreConfigurationProps';
import { Tag } from '../Tag';
import { WindowsConfigurationProps } from './filesystem/WindowsConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type FileSystemAttributes = {  }
export function fileSystem(fileSystemProps: FileSystem): FileSystem & { attributes: FileSystemAttributes } { return ({ ...fileSystemProps, _logicalType: 'AWS::FSx::FileSystem', attributes: {  } }) }

export interface FileSystem extends KloudResource {
    fileSystemType: Value<string>;
    subnetIds: Value<Value<string>[]>;
    kmsKeyId?: Value<string>;
    storageCapacity?: Value<number>;
    lustreConfiguration?: LustreConfigurationProps;
    backupId?: Value<string>;
    securityGroupIds?: Value<Value<string>[]>;
    tags?: Tag[];
    windowsConfiguration?: WindowsConfigurationProps;
}