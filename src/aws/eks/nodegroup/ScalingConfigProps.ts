import { Value } from '../../../kloudformation/Value';

export interface ScalingConfigProps {
  minSize?: Value<number>
  desiredSize?: Value<number>
  maxSize?: Value<number>
}