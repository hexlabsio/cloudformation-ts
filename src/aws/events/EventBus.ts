import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type EventBusAttributes = { Policy: Attribute<string>; Arn: Attribute<string>; Name: Attribute<string> }
export function eventBus(eventBusProps: EventBus): EventBus & { attributes: EventBusAttributes } { return ({ ...eventBusProps, _logicalType: 'AWS::Events::EventBus', attributes: { Policy: 'Policy', Arn: 'Arn', Name: 'Name' } }) }

export interface EventBus extends KloudResource {
    name: Value<string>;
    eventSourceName?: Value<string>;
}