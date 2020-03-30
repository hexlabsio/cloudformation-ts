import { Value } from '../../kloudformation/Value';
import { ElasticFileSystemTagProps } from './filesystem/ElasticFileSystemTagProps';
import { LifecyclePolicyProps } from './filesystem/LifecyclePolicyProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function fileSystem(fileSystemProps: FileSystem & { logicalName?: string }): FileSystem { return ({ ...fileSystemProps, _logicalType: 'AWS::EFS::FileSystem' }) as unknown as FileSystem }

export interface FileSystem extends KloudResource {
    encrypted?: Value<boolean>;
    fileSystemTags?: ElasticFileSystemTagProps[];
    kmsKeyId?: Value<string>;
    lifecyclePolicies?: LifecyclePolicyProps[];
    performanceMode?: Value<string>;
    provisionedThroughputInMibps?: Value<number>;
    throughputMode?: Value<string>;
}