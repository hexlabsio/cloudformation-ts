import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function workflow(workflowProps: Workflow): Workflow { return ({ ...workflowProps, _logicalType: '' }) }
  
export interface Workflow extends KloudResource {
  description?: Value<string>
  defaultRunProperties?: Value<any>
  tags?: Value<any>
  name?: Value<string>
}