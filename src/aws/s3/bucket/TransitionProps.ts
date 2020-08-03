import { Value } from '../../../kloudformation/Value';

export interface TransitionProps {
  storageClass: Value<string>
  transitionDate?: Value<any>
  transitionInDays?: Value<number>
}