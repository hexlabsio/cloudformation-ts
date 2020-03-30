import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function workflow(workflowProps: Workflow & { logicalName?: string }): Workflow { return ({ ...workflowProps, _logicalType: 'AWS::Glue::Workflow' }) as unknown as Workflow }

export interface Workflow extends KloudResource {
    description?: Value<string>;
    defaultRunProperties?: Value<any>;
    tags?: Value<any>;
    name?: Value<string>;
}