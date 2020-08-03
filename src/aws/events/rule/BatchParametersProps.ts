import { BatchArrayPropertiesProps } from './BatchArrayPropertiesProps';
import { Value } from '../../../kloudformation/Value';
import { BatchRetryStrategyProps } from './BatchRetryStrategyProps';

export interface BatchParametersProps {
  arrayProperties?: BatchArrayPropertiesProps
  jobDefinition: Value<string>
  jobName: Value<string>
  retryStrategy?: BatchRetryStrategyProps
}