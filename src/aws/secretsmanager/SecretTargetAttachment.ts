import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SecretTargetAttachmentAttributes = {  }
export function secretTargetAttachment(secretTargetAttachmentProps: SecretTargetAttachment): SecretTargetAttachment & { attributes: SecretTargetAttachmentAttributes } { return ({ ...secretTargetAttachmentProps, _logicalType: 'AWS::SecretsManager::SecretTargetAttachment', attributes: {  } }) }

export interface SecretTargetAttachment extends KloudResource {
    secretId: Value<string>;
    targetType: Value<string>;
    targetId: Value<string>;
}