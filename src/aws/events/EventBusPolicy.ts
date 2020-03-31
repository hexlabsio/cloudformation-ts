import { Value } from '../../kloudformation/Value';
import { ConditionProps } from './eventbuspolicy/ConditionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type EventBusPolicyAttributes = {  }
export function eventBusPolicy(eventBusPolicyProps: EventBusPolicy): EventBusPolicy & { attributes: EventBusPolicyAttributes } { return ({ ...eventBusPolicyProps, _logicalType: 'AWS::Events::EventBusPolicy', attributes: {  } }) }

export interface EventBusPolicy extends KloudResource {
    action: Value<string>;
    statementId: Value<string>;
    principal: Value<string>;
    eventBusName?: Value<string>;
    condition?: ConditionProps;
}