import { Value } from '../../../kloudformation/Value';

export interface CpuOptionsProps {
  threadsPerCore?: Value<number>
  coreCount?: Value<number>
}