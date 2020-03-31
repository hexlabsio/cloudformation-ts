import { Value } from '../../../kloudformation/Value';
import { ActionProps } from './ActionProps';

export function transitionEventProps(transitionEventPropsProps: TransitionEventProps): TransitionEventProps { return (transitionEventPropsProps) }

export interface TransitionEventProps {
    condition?: Value<string>;
    actions?: ActionProps[];
    nextState?: Value<string>;
    eventName?: Value<string>;
}