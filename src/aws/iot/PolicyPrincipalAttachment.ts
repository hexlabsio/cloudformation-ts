import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function policyPrincipalAttachment(policyPrincipalAttachmentProps: PolicyPrincipalAttachment & { logicalName?: string }): PolicyPrincipalAttachment { return ({ ...policyPrincipalAttachmentProps, _logicalType: 'AWS::IoT::PolicyPrincipalAttachment' }) as unknown as PolicyPrincipalAttachment }

export interface PolicyPrincipalAttachment extends KloudResource {
    policyName: Value<string>;
    principal: Value<string>;
}