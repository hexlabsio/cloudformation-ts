import { EventProps } from './EventProps';
import { TransitionEventProps } from './TransitionEventProps';

export function onInputProps(onInputPropsProps: OnInputProps): OnInputProps { return (onInputPropsProps) as unknown as OnInputProps }

export interface OnInputProps {
    events?: EventProps[];
    transitionEvents?: TransitionEventProps[];
}