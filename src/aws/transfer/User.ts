import { Value } from '../../kloudformation/Value';
import { HomeDirectoryMapEntryProps } from './user/HomeDirectoryMapEntryProps';
import { SshPublicKeyProps } from './user/SshPublicKeyProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type UserAttributes = { ServerId: Attribute<string>;UserName: Attribute<string>;Arn: Attribute<string> }
export function user(userProps: User): User & {attributes: UserAttributes} { return ({ ...userProps, _logicalType: 'AWS::Transfer::User', attributes: { ServerId: 'ServerId',UserName: 'UserName',Arn: 'Arn' } }) }
   
export interface User extends KloudResource {
  policy?: Value<string>
  role: Value<string>
  homeDirectory?: Value<string>
  homeDirectoryType?: Value<string>
  serverId: Value<string>
  userName: Value<string>
  homeDirectoryMappings?: HomeDirectoryMapEntryProps[]
  sshPublicKeys?: SshPublicKeyProps[]
  tags?: Tag[]
}