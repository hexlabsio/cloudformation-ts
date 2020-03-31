import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type UserPoolUICustomizationAttachmentAttributes = {  }
export function userPoolUICustomizationAttachment(userPoolUICustomizationAttachmentProps: UserPoolUICustomizationAttachment): UserPoolUICustomizationAttachment & { attributes: UserPoolUICustomizationAttachmentAttributes } { return ({ ...userPoolUICustomizationAttachmentProps, _logicalType: 'AWS::Cognito::UserPoolUICustomizationAttachment', attributes: {  } }) }

export interface UserPoolUICustomizationAttachment extends KloudResource {
    userPoolId: Value<string>;
    clientId: Value<string>;
    cSS?: Value<string>;
}