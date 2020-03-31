import { Value } from '../../../kloudformation/Value';
import { BatchArrayPropertiesProps } from './BatchArrayPropertiesProps';
import { BatchRetryStrategyProps } from './BatchRetryStrategyProps';

export function batchParametersProps(batchParametersPropsProps: BatchParametersProps): BatchParametersProps { return (batchParametersPropsProps) }

export interface BatchParametersProps {
    jobDefinition: Value<string>;
    jobName: Value<string>;
    arrayProperties?: BatchArrayPropertiesProps;
    retryStrategy?: BatchRetryStrategyProps;
}