import { Value } from '../../../kloudformation/Value';

export interface BufferingHintsProps {
  intervalInSeconds?: Value<number>
  sizeInMBs?: Value<number>
}