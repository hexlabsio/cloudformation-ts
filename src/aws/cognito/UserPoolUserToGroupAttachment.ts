import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function userPoolUserToGroupAttachment(userPoolUserToGroupAttachmentProps: UserPoolUserToGroupAttachment): UserPoolUserToGroupAttachment { return ({ ...userPoolUserToGroupAttachmentProps, _logicalType: '' }) }
  
export interface UserPoolUserToGroupAttachment extends KloudResource {
  groupName: Value<string>
  userPoolId: Value<string>
  username: Value<string>
}