import { Value } from '../../kloudformation/Value';
import { ActionProps } from './trigger/ActionProps';
import { PredicateProps } from './trigger/PredicateProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TriggerAttributes = {  }
export function trigger(triggerProps: Trigger): Trigger & { attributes: TriggerAttributes } { return ({ ...triggerProps, _logicalType: 'AWS::Glue::Trigger', attributes: {  } }) }

export interface Trigger extends KloudResource {
    type: Value<string>;
    actions: ActionProps[];
    startOnCreation?: Value<boolean>;
    description?: Value<string>;
    workflowName?: Value<string>;
    schedule?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
    predicate?: PredicateProps;
}