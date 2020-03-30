import { Value } from '../../../kloudformation/Value';

export function checkpointConfigurationProps(checkpointConfigurationPropsProps: CheckpointConfigurationProps): CheckpointConfigurationProps { return (checkpointConfigurationPropsProps) as unknown as CheckpointConfigurationProps }

export interface CheckpointConfigurationProps {
    configurationType: Value<string>;
    checkpointInterval?: Value<number>;
    minPauseBetweenCheckpoints?: Value<number>;
    checkpointingEnabled?: Value<boolean>;
}