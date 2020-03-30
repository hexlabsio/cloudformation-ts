import { Value } from '../../../kloudformation/Value';

export function batchRetryStrategyProps(batchRetryStrategyPropsProps: BatchRetryStrategyProps): BatchRetryStrategyProps { return (batchRetryStrategyPropsProps) as unknown as BatchRetryStrategyProps }

export interface BatchRetryStrategyProps {
    attempts?: Value<number>;
}