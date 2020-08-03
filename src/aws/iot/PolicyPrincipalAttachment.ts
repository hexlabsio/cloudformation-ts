import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function policyPrincipalAttachment(policyPrincipalAttachmentProps: PolicyPrincipalAttachment): PolicyPrincipalAttachment { return ({ ...policyPrincipalAttachmentProps, _logicalType: '' }) }
  
export interface PolicyPrincipalAttachment extends KloudResource {
  policyName: Value<string>
  principal: Value<string>
}