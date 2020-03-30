import { Value } from '../../../kloudformation/Value';

export function transitionProps(transitionPropsProps: TransitionProps): TransitionProps { return (transitionPropsProps) as unknown as TransitionProps }

export interface TransitionProps {
    storageClass: Value<string>;
    transitionDate?: Value<java.time.Instant>;
    transitionInDays?: Value<number>;
}