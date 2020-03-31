import { AttributePayloadProps } from './thing/AttributePayloadProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ThingAttributes = {  }
export function thing(thingProps: Thing): Thing & { attributes: ThingAttributes } { return ({ ...thingProps, _logicalType: 'AWS::IoT::Thing', attributes: {  } }) }

export interface Thing extends KloudResource {
    attributePayload?: AttributePayloadProps;
    thingName?: Value<string>;
}