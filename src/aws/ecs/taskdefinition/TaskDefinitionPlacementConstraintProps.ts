import { Value } from '../../../kloudformation/Value';

export interface TaskDefinitionPlacementConstraintProps {
  type: Value<string>
  expression?: Value<string>
}