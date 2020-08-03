import { Value } from '../../../kloudformation/Value';
import { ActionProps } from './ActionProps';

export interface TransitionEventProps {
  condition?: Value<string>
  actions?: ActionProps[]
  nextState?: Value<string>
  eventName?: Value<string>
}