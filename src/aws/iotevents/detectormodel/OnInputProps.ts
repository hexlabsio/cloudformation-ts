import { EventProps } from './EventProps';
import { TransitionEventProps } from './TransitionEventProps';

export function onInputProps(onInputPropsProps: OnInputProps): OnInputProps { return (onInputPropsProps) }

export interface OnInputProps {
    events?: EventProps[];
    transitionEvents?: TransitionEventProps[];
}