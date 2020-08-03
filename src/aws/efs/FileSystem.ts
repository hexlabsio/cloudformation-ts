import { Value } from '../../kloudformation/Value';
import { ElasticFileSystemTagProps } from './fileSystem/ElasticFileSystemTagProps';
import { LifecyclePolicyProps } from './fileSystem/LifecyclePolicyProps';
import { BackupPolicyProps } from './fileSystem/BackupPolicyProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type FileSystemAttributes = { FileSystemId: Attribute<string>;Arn: Attribute<string> }
export function fileSystem(fileSystemProps: FileSystem): FileSystem & {attributes: FileSystemAttributes} { return ({ ...fileSystemProps, _logicalType: 'AWS::EFS::FileSystem', attributes: { FileSystemId: 'FileSystemId',Arn: 'Arn' } }) }
   
export interface FileSystem extends KloudResource {
  encrypted?: Value<boolean>
  fileSystemTags?: ElasticFileSystemTagProps[]
  kmsKeyId?: Value<string>
  lifecyclePolicies?: LifecyclePolicyProps[]
  performanceMode?: Value<string>
  provisionedThroughputInMibps?: Value<number>
  throughputMode?: Value<string>
  fileSystemPolicy?: Value<any>
  backupPolicy?: BackupPolicyProps
}