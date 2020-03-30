import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function eventBus(eventBusProps: EventBus & { logicalName?: string }): EventBus { return ({ ...eventBusProps, _logicalType: 'AWS::Events::EventBus' }) as unknown as EventBus }

export interface EventBus extends KloudResource {
    name: Value<string>;
    eventSourceName?: Value<string>;
}