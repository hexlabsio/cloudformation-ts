import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ThingPrincipalAttachmentAttributes = {  }
export function thingPrincipalAttachment(thingPrincipalAttachmentProps: ThingPrincipalAttachment): ThingPrincipalAttachment & { attributes: ThingPrincipalAttachmentAttributes } { return ({ ...thingPrincipalAttachmentProps, _logicalType: 'AWS::IoT::ThingPrincipalAttachment', attributes: {  } }) }

export interface ThingPrincipalAttachment extends KloudResource {
    principal: Value<string>;
    thingName: Value<string>;
}