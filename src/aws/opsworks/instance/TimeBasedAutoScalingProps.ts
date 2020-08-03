import { Value } from '../../../kloudformation/Value';

export interface TimeBasedAutoScalingProps {
  friday?: Value<Value<string>[]>
  monday?: Value<Value<string>[]>
  saturday?: Value<Value<string>[]>
  sunday?: Value<Value<string>[]>
  thursday?: Value<Value<string>[]>
  tuesday?: Value<Value<string>[]>
  wednesday?: Value<Value<string>[]>
}