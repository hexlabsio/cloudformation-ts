import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function userPoolUICustomizationAttachment(userPoolUICustomizationAttachmentProps: UserPoolUICustomizationAttachment & { logicalName?: string }): UserPoolUICustomizationAttachment { return ({ ...userPoolUICustomizationAttachmentProps, _logicalType: 'AWS::Cognito::UserPoolUICustomizationAttachment' }) as unknown as UserPoolUICustomizationAttachment }

export interface UserPoolUICustomizationAttachment extends KloudResource {
    userPoolId: Value<string>;
    clientId: Value<string>;
    cSS?: Value<string>;
}