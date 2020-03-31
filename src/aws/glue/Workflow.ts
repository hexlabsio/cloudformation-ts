import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type WorkflowAttributes = {  }
export function workflow(workflowProps: Workflow): Workflow & { attributes: WorkflowAttributes } { return ({ ...workflowProps, _logicalType: 'AWS::Glue::Workflow', attributes: {  } }) }

export interface Workflow extends KloudResource {
    description?: Value<string>;
    defaultRunProperties?: Value<any>;
    tags?: Value<any>;
    name?: Value<string>;
}