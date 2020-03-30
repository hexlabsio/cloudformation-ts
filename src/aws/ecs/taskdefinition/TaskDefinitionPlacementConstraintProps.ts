import { Value } from '../../../kloudformation/Value';

export function taskDefinitionPlacementConstraintProps(taskDefinitionPlacementConstraintPropsProps: TaskDefinitionPlacementConstraintProps): TaskDefinitionPlacementConstraintProps { return (taskDefinitionPlacementConstraintPropsProps) as unknown as TaskDefinitionPlacementConstraintProps }

export interface TaskDefinitionPlacementConstraintProps {
    type: Value<string>;
    expression?: Value<string>;
}