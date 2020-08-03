import { Value } from '../../../kloudformation/Value';

export interface CpuOptionsProps {
  coreCount?: Value<number>
  threadsPerCore?: Value<number>
}