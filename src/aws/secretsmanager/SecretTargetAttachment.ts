import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function secretTargetAttachment(secretTargetAttachmentProps: SecretTargetAttachment): SecretTargetAttachment { return ({ ...secretTargetAttachmentProps, _logicalType: '' }) }
  
export interface SecretTargetAttachment extends KloudResource {
  secretId: Value<string>
  targetType: Value<string>
  targetId: Value<string>
}