import { Value } from '../../../kloudformation/Value';

export function retryStrategyProps(retryStrategyPropsProps: RetryStrategyProps): RetryStrategyProps { return (retryStrategyPropsProps) }

export interface RetryStrategyProps {
    attempts?: Value<number>;
}