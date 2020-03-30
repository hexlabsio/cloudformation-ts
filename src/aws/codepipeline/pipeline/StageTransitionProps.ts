import { Value } from '../../../kloudformation/Value';

export function stageTransitionProps(stageTransitionPropsProps: StageTransitionProps): StageTransitionProps { return (stageTransitionPropsProps) as unknown as StageTransitionProps }

export interface StageTransitionProps {
    reason: Value<string>;
    stageName: Value<string>;
}