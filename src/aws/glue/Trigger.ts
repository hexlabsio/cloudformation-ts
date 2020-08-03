import { Value } from '../../kloudformation/Value';
import { ActionProps } from './trigger/ActionProps';
import { PredicateProps } from './trigger/PredicateProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function trigger(triggerProps: Trigger): Trigger { return ({ ...triggerProps, _logicalType: '' }) }
  
export interface Trigger extends KloudResource {
  type: Value<string>
  startOnCreation?: Value<boolean>
  description?: Value<string>
  actions: ActionProps[]
  workflowName?: Value<string>
  schedule?: Value<string>
  tags?: Value<any>
  name?: Value<string>
  predicate?: PredicateProps
}