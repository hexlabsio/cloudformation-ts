import { Value } from '../../kloudformation/Value';
import { ConditionProps } from './eventBusPolicy/ConditionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function eventBusPolicy(eventBusPolicyProps: EventBusPolicy): EventBusPolicy { return ({ ...eventBusPolicyProps, _logicalType: '' }) }
  
export interface EventBusPolicy extends KloudResource {
  eventBusName?: Value<string>
  condition?: ConditionProps
  action: Value<string>
  statementId: Value<string>
  principal: Value<string>
}