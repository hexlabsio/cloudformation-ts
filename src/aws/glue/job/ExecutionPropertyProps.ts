import { Value } from '../../../kloudformation/Value';

export function executionPropertyProps(executionPropertyPropsProps: ExecutionPropertyProps): ExecutionPropertyProps { return (executionPropertyPropsProps) }

export interface ExecutionPropertyProps {
    maxConcurrentRuns?: Value<number>;
}