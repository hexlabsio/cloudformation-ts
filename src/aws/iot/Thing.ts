import { AttributePayloadProps } from './thing/AttributePayloadProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function thing(thingProps: Thing & { logicalName?: string }): Thing { return ({ ...thingProps, _logicalType: 'AWS::IoT::Thing' }) as unknown as Thing }

export interface Thing extends KloudResource {
    attributePayload?: AttributePayloadProps;
    thingName?: Value<string>;
}