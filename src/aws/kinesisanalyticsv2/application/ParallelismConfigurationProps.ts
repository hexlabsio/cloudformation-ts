import { Value } from '../../../kloudformation/Value';

export interface ParallelismConfigurationProps {
  configurationType: Value<string>
  parallelismPerKPU?: Value<number>
  autoScalingEnabled?: Value<boolean>
  parallelism?: Value<number>
}