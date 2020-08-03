import { Value } from '../../../kloudformation/Value';

export interface CheckpointConfigurationProps {
  configurationType: Value<string>
  checkpointInterval?: Value<number>
  minPauseBetweenCheckpoints?: Value<number>
  checkpointingEnabled?: Value<boolean>
}