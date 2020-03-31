import { Value } from '../../../kloudformation/Value';

export function parallelismConfigurationProps(parallelismConfigurationPropsProps: ParallelismConfigurationProps): ParallelismConfigurationProps { return (parallelismConfigurationPropsProps) }

export interface ParallelismConfigurationProps {
    configurationType: Value<string>;
    parallelismPerKPU?: Value<number>;
    autoScalingEnabled?: Value<boolean>;
    parallelism?: Value<number>;
}