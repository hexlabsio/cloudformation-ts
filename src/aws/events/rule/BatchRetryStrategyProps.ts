import { Value } from '../../../kloudformation/Value';

export function batchRetryStrategyProps(batchRetryStrategyPropsProps: BatchRetryStrategyProps): BatchRetryStrategyProps { return (batchRetryStrategyPropsProps) }

export interface BatchRetryStrategyProps {
    attempts?: Value<number>;
}