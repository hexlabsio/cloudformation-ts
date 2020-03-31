import { Value } from '../../kloudformation/Value';
import { LoginProfileProps } from './user/LoginProfileProps';
import { PolicyProps } from './user/PolicyProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type UserAttributes = { Arn: Attribute<string> }
export function user(userProps: User): User & { attributes: UserAttributes } { return ({ ...userProps, _logicalType: 'AWS::IAM::User', attributes: { Arn: 'Arn' } }) }

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