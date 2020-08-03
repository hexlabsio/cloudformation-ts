import { Value } from '../../../kloudformation/Value';

export interface LifecycleResourceTypeProps {
  deleteAfterDays?: Value<number>
  moveToColdStorageAfterDays?: Value<number>
}