import { Value } from '../../../kloudformation/Value';

export function retryStrategyProps(retryStrategyPropsProps: RetryStrategyProps): RetryStrategyProps { return (retryStrategyPropsProps) as unknown as RetryStrategyProps }

export interface RetryStrategyProps {
    attempts?: Value<number>;
}