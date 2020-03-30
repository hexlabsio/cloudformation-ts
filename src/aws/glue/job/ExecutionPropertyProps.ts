import { Value } from '../../../kloudformation/Value';

export function executionPropertyProps(executionPropertyPropsProps: ExecutionPropertyProps): ExecutionPropertyProps { return (executionPropertyPropsProps) as unknown as ExecutionPropertyProps }

export interface ExecutionPropertyProps {
    maxConcurrentRuns?: Value<number>;
}