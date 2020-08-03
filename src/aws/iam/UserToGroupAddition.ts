import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function userToGroupAddition(userToGroupAdditionProps: UserToGroupAddition): UserToGroupAddition { return ({ ...userToGroupAdditionProps, _logicalType: '' }) }
  
export interface UserToGroupAddition extends KloudResource {
  groupName: Value<string>
  users: Value<Value<string>[]>
}