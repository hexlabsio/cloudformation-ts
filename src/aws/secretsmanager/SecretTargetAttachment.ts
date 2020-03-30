import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function secretTargetAttachment(secretTargetAttachmentProps: SecretTargetAttachment & { logicalName?: string }): SecretTargetAttachment { return ({ ...secretTargetAttachmentProps, _logicalType: 'AWS::SecretsManager::SecretTargetAttachment' }) as unknown as SecretTargetAttachment }

export interface SecretTargetAttachment extends KloudResource {
    secretId: Value<string>;
    targetType: Value<string>;
    targetId: Value<string>;
}