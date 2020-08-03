import { Value } from '../../../kloudformation/Value';

export interface NoncurrentVersionTransitionProps {
  storageClass: Value<string>
  transitionInDays: Value<number>
}