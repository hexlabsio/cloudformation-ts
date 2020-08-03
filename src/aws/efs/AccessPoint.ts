import { Value } from '../../kloudformation/Value';
import { AccessPointTagProps } from './accessPoint/AccessPointTagProps';
import { PosixUserProps } from './accessPoint/PosixUserProps';
import { RootDirectoryProps } from './accessPoint/RootDirectoryProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type AccessPointAttributes = { AccessPointId: Attribute<string>;Arn: Attribute<string> }
export function accessPoint(accessPointProps: AccessPoint): AccessPoint & {attributes: AccessPointAttributes} { return ({ ...accessPointProps, _logicalType: 'AWS::EFS::AccessPoint', attributes: { AccessPointId: 'AccessPointId',Arn: 'Arn' } }) }
   
export interface AccessPoint extends KloudResource {
  clientToken?: Value<string>
  accessPointTags?: AccessPointTagProps[]
  fileSystemId: Value<string>
  posixUser?: PosixUserProps
  rootDirectory?: RootDirectoryProps
}