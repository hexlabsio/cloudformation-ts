import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function mountTarget(mountTargetProps: MountTarget & { logicalName?: string }): MountTarget { return ({ ...mountTargetProps, _logicalType: 'AWS::EFS::MountTarget' }) as unknown as MountTarget }

export interface MountTarget extends KloudResource {
    fileSystemId: Value<string>;
    securityGroups: Value<Value<string>[]>;
    subnetId: Value<string>;
    ipAddress?: Value<string>;
}