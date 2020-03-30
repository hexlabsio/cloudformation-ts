import { Value } from '../../kloudformation/Value';
import { LoginProfileProps } from './user/LoginProfileProps';
import { PolicyProps } from './user/PolicyProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function user(userProps: User & { logicalName?: string }): User { return ({ ...userProps, _logicalType: 'AWS::IAM::User' }) as unknown as User }

export interface User extends KloudResource {
    groups?: Value<Value<string>[]>;
    loginProfile?: LoginProfileProps;
    managedPolicyArns?: Value<Value<string>[]>;
    path?: Value<string>;
    permissionsBoundary?: Value<string>;
    policies?: PolicyProps[];
    tags?: Tag[];
    userName?: Value<string>;
}