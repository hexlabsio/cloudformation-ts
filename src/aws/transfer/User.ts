import { Value } from '../../kloudformation/Value';
import { HomeDirectoryMapEntryProps } from './user/HomeDirectoryMapEntryProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type UserAttributes = { ServerId: Attribute<string>; UserName: Attribute<string>; Arn: Attribute<string> }
export function user(userProps: User): User & { attributes: UserAttributes } { return ({ ...userProps, _logicalType: 'AWS::Transfer::User', attributes: { ServerId: 'ServerId', UserName: 'UserName', Arn: 'Arn' } }) }

export interface User extends KloudResource {
    role: Value<string>;
    serverId: Value<string>;
    userName: Value<string>;
    policy?: Value<string>;
    homeDirectory?: Value<string>;
    homeDirectoryType?: Value<string>;
    homeDirectoryMappings?: HomeDirectoryMapEntryProps[];
    sshPublicKeys?: Value<string>[];
    tags?: Tag[];
}