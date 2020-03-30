import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function userToGroupAddition(userToGroupAdditionProps: UserToGroupAddition & { logicalName?: string }): UserToGroupAddition { return ({ ...userToGroupAdditionProps, _logicalType: 'AWS::IAM::UserToGroupAddition' }) as unknown as UserToGroupAddition }

export interface UserToGroupAddition extends KloudResource {
    groupName: Value<string>;
    users: Value<Value<string>[]>;
}