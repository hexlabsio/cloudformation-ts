import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type MountTargetAttributes = { IpAddress: Attribute<string> }
export function mountTarget(mountTargetProps: MountTarget): MountTarget & {attributes: MountTargetAttributes} { return ({ ...mountTargetProps, _logicalType: 'AWS::EFS::MountTarget', attributes: { IpAddress: 'IpAddress' } }) }
   
export interface MountTarget extends KloudResource {
  fileSystemId: Value<string>
  ipAddress?: Value<string>
  securityGroups: Value<Value<string>[]>
  subnetId: Value<string>
}