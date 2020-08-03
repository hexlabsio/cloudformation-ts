import { AttributePayloadProps } from './thing/AttributePayloadProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function thing(thingProps: Thing): Thing { return ({ ...thingProps, _logicalType: '' }) }
  
export interface Thing extends KloudResource {
  attributePayload?: AttributePayloadProps
  thingName?: Value<string>
}