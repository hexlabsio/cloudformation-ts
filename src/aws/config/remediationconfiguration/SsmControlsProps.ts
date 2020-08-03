import { Value } from '../../../kloudformation/Value';

export interface SsmControlsProps {
  errorPercentage?: Value<number>
  concurrentExecutionRatePercentage?: Value<number>
}