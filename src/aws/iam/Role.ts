import { Value } from '../../kloudformation/Value';
import { PolicyProps } from './role/PolicyProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function role(roleProps: Role & { logicalName?: string }): Role { return ({ ...roleProps, _logicalType: 'AWS::IAM::Role' }) as unknown as Role }

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