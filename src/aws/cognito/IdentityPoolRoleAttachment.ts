import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function identityPoolRoleAttachment(identityPoolRoleAttachmentProps: IdentityPoolRoleAttachment & { logicalName?: string }): IdentityPoolRoleAttachment { return ({ ...identityPoolRoleAttachmentProps, _logicalType: 'AWS::Cognito::IdentityPoolRoleAttachment' }) as unknown as IdentityPoolRoleAttachment }

export interface IdentityPoolRoleAttachment extends KloudResource {
    identityPoolId: Value<string>;
    roleMappings?: Value<any>;
    roles?: Value<any>;
}