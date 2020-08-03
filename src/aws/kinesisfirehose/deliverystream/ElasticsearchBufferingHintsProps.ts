import { Value } from '../../../kloudformation/Value';

export interface ElasticsearchBufferingHintsProps {
  intervalInSeconds?: Value<number>
  sizeInMBs?: Value<number>
}