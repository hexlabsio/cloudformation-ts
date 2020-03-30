import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function thingPrincipalAttachment(thingPrincipalAttachmentProps: ThingPrincipalAttachment & { logicalName?: string }): ThingPrincipalAttachment { return ({ ...thingPrincipalAttachmentProps, _logicalType: 'AWS::IoT::ThingPrincipalAttachment' }) as unknown as ThingPrincipalAttachment }

export interface ThingPrincipalAttachment extends KloudResource {
    principal: Value<string>;
    thingName: Value<string>;
}