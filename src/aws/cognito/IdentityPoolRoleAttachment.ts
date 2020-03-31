import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type IdentityPoolRoleAttachmentAttributes = {  }
export function identityPoolRoleAttachment(identityPoolRoleAttachmentProps: IdentityPoolRoleAttachment): IdentityPoolRoleAttachment & { attributes: IdentityPoolRoleAttachmentAttributes } { return ({ ...identityPoolRoleAttachmentProps, _logicalType: 'AWS::Cognito::IdentityPoolRoleAttachment', attributes: {  } }) }

export interface IdentityPoolRoleAttachment extends KloudResource {
    identityPoolId: Value<string>;
    roleMappings?: Value<any>;
    roles?: Value<any>;
}