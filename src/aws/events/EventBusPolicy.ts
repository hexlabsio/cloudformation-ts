import { Value } from '../../kloudformation/Value';
import { ConditionProps } from './eventbuspolicy/ConditionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function eventBusPolicy(eventBusPolicyProps: EventBusPolicy & { logicalName?: string }): EventBusPolicy { return ({ ...eventBusPolicyProps, _logicalType: 'AWS::Events::EventBusPolicy' }) as unknown as EventBusPolicy }

export interface EventBusPolicy extends KloudResource {
    action: Value<string>;
    statementId: Value<string>;
    principal: Value<string>;
    eventBusName?: Value<string>;
    condition?: ConditionProps;
}