import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function thingPrincipalAttachment(thingPrincipalAttachmentProps: ThingPrincipalAttachment): ThingPrincipalAttachment { return ({ ...thingPrincipalAttachmentProps, _logicalType: '' }) }
  
export interface ThingPrincipalAttachment extends KloudResource {
  principal: Value<string>
  thingName: Value<string>
}