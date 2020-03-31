import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type UserPoolUserToGroupAttachmentAttributes = {  }
export function userPoolUserToGroupAttachment(userPoolUserToGroupAttachmentProps: UserPoolUserToGroupAttachment): UserPoolUserToGroupAttachment & { attributes: UserPoolUserToGroupAttachmentAttributes } { return ({ ...userPoolUserToGroupAttachmentProps, _logicalType: 'AWS::Cognito::UserPoolUserToGroupAttachment', attributes: {  } }) }

export interface UserPoolUserToGroupAttachment extends KloudResource {
    groupName: Value<string>;
    userPoolId: Value<string>;
    username: Value<string>;
}