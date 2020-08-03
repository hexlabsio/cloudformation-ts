import { EventProps } from './EventProps';
import { TransitionEventProps } from './TransitionEventProps';

export interface OnInputProps {
  events?: EventProps[]
  transitionEvents?: TransitionEventProps[]
}