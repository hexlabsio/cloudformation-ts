import { Value } from '../../../kloudformation/Value';

export function stageTransitionProps(stageTransitionPropsProps: StageTransitionProps): StageTransitionProps { return (stageTransitionPropsProps) }

export interface StageTransitionProps {
    reason: Value<string>;
    stageName: Value<string>;
}