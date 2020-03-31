import { Value } from '../../kloudformation/Value';
import { ElasticFileSystemTagProps } from './filesystem/ElasticFileSystemTagProps';
import { LifecyclePolicyProps } from './filesystem/LifecyclePolicyProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type FileSystemAttributes = {  }
export function fileSystem(fileSystemProps: FileSystem): FileSystem & { attributes: FileSystemAttributes } { return ({ ...fileSystemProps, _logicalType: 'AWS::EFS::FileSystem', attributes: {  } }) }

export interface FileSystem extends KloudResource {
    encrypted?: Value<boolean>;
    fileSystemTags?: ElasticFileSystemTagProps[];
    kmsKeyId?: Value<string>;
    lifecyclePolicies?: LifecyclePolicyProps[];
    performanceMode?: Value<string>;
    provisionedThroughputInMibps?: Value<number>;
    throughputMode?: Value<string>;
}