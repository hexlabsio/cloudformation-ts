import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function identityPoolRoleAttachment(identityPoolRoleAttachmentProps: IdentityPoolRoleAttachment): IdentityPoolRoleAttachment { return ({ ...identityPoolRoleAttachmentProps, _logicalType: '' }) }
  
export interface IdentityPoolRoleAttachment extends KloudResource {
  roleMappings?: Value<any>
  identityPoolId: Value<string>
  roles?: Value<any>
}