import { Value } from '../../kloudformation/Value';
import { PolicyProps } from './role/PolicyProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type RoleAttributes = { Arn: Attribute<string>; RoleId: Attribute<string> }
export function role(roleProps: Role): Role & { attributes: RoleAttributes } { return ({ ...roleProps, _logicalType: 'AWS::IAM::Role', attributes: { Arn: 'Arn', RoleId: 'RoleId' } }) }

export interface Role extends KloudResource {
    assumeRolePolicyDocument: Value<any>;
    description?: Value<string>;
    managedPolicyArns?: Value<Value<string>[]>;
    maxSessionDuration?: Value<number>;
    path?: Value<string>;
    permissionsBoundary?: Value<string>;
    policies?: PolicyProps[];
    roleName?: Value<string>;
    tags?: Tag[];
}