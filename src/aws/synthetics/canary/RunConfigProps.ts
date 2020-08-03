import { Value } from '../../../kloudformation/Value';

export interface RunConfigProps {
  timeoutInSeconds: Value<number>
  memoryInMB?: Value<number>
}