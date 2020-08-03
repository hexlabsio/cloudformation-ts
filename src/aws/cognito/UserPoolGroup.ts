import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function userPoolGroup(userPoolGroupProps: UserPoolGroup): UserPoolGroup { return ({ ...userPoolGroupProps, _logicalType: '' }) }
  
export interface UserPoolGroup extends KloudResource {
  groupName?: Value<string>
  description?: Value<string>
  userPoolId: Value<string>
  precedence?: Value<number>
  roleArn?: Value<string>
}