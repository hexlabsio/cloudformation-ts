import { Value } from '../../../kloudformation/Value';

export function taskDefinitionPlacementConstraintProps(taskDefinitionPlacementConstraintPropsProps: TaskDefinitionPlacementConstraintProps): TaskDefinitionPlacementConstraintProps { return (taskDefinitionPlacementConstraintPropsProps) }

export interface TaskDefinitionPlacementConstraintProps {
    type: Value<string>;
    expression?: Value<string>;
}