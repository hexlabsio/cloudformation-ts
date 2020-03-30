import { Value } from '../../kloudformation/Value';
import { ActionProps } from './trigger/ActionProps';
import { PredicateProps } from './trigger/PredicateProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function trigger(triggerProps: Trigger & { logicalName?: string }): Trigger { return ({ ...triggerProps, _logicalType: 'AWS::Glue::Trigger' }) as unknown as Trigger }

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