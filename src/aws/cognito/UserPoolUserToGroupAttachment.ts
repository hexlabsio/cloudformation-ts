import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function userPoolUserToGroupAttachment(userPoolUserToGroupAttachmentProps: UserPoolUserToGroupAttachment & { logicalName?: string }): UserPoolUserToGroupAttachment { return ({ ...userPoolUserToGroupAttachmentProps, _logicalType: 'AWS::Cognito::UserPoolUserToGroupAttachment' }) as unknown as UserPoolUserToGroupAttachment }

export interface UserPoolUserToGroupAttachment extends KloudResource {
    groupName: Value<string>;
    userPoolId: Value<string>;
    username: Value<string>;
}