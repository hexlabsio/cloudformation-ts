import { Value } from '../../../kloudformation/Value';

export interface HopDestinationProps {
  waitMinutes?: Value<number>
  priority?: Value<number>
  queue?: Value<string>
}