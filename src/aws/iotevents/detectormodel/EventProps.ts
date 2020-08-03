import { Value } from '../../../kloudformation/Value';
import { ActionProps } from './ActionProps';

export interface EventProps {
  condition?: Value<string>
  actions?: ActionProps[]
  eventName?: Value<string>
}