import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type PolicyPrincipalAttachmentAttributes = {  }
export function policyPrincipalAttachment(policyPrincipalAttachmentProps: PolicyPrincipalAttachment): PolicyPrincipalAttachment & { attributes: PolicyPrincipalAttachmentAttributes } { return ({ ...policyPrincipalAttachmentProps, _logicalType: 'AWS::IoT::PolicyPrincipalAttachment', attributes: {  } }) }

export interface PolicyPrincipalAttachment extends KloudResource {
    policyName: Value<string>;
    principal: Value<string>;
}