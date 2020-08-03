import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function userPoolUICustomizationAttachment(userPoolUICustomizationAttachmentProps: UserPoolUICustomizationAttachment): UserPoolUICustomizationAttachment { return ({ ...userPoolUICustomizationAttachmentProps, _logicalType: '' }) }
  
export interface UserPoolUICustomizationAttachment extends KloudResource {
  cSS?: Value<string>
  userPoolId: Value<string>
  clientId: Value<string>
}