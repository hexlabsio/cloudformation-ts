import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type UserToGroupAdditionAttributes = {  }
export function userToGroupAddition(userToGroupAdditionProps: UserToGroupAddition): UserToGroupAddition & { attributes: UserToGroupAdditionAttributes } { return ({ ...userToGroupAdditionProps, _logicalType: 'AWS::IAM::UserToGroupAddition', attributes: {  } }) }

export interface UserToGroupAddition extends KloudResource {
    groupName: Value<string>;
    users: Value<Value<string>[]>;
}