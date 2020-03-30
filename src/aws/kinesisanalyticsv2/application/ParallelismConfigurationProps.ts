import { Value } from '../../../kloudformation/Value';

export function parallelismConfigurationProps(parallelismConfigurationPropsProps: ParallelismConfigurationProps): ParallelismConfigurationProps { return (parallelismConfigurationPropsProps) as unknown as ParallelismConfigurationProps }

export interface ParallelismConfigurationProps {
    configurationType: Value<string>;
    parallelismPerKPU?: Value<number>;
    autoScalingEnabled?: Value<boolean>;
    parallelism?: Value<number>;
}