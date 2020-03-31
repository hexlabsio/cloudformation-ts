import { Value } from '../../../kloudformation/Value';

export function noncurrentVersionTransitionProps(noncurrentVersionTransitionPropsProps: NoncurrentVersionTransitionProps): NoncurrentVersionTransitionProps { return (noncurrentVersionTransitionPropsProps) }

export interface NoncurrentVersionTransitionProps {
    storageClass: Value<string>;
    transitionInDays: Value<number>;
}