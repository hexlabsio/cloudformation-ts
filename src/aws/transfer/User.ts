import { Value } from '../../kloudformation/Value';
import { HomeDirectoryMapEntryProps } from './user/HomeDirectoryMapEntryProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function user(userProps: User & { logicalName?: string }): User { return ({ ...userProps, _logicalType: 'AWS::Transfer::User' }) as unknown as User }

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