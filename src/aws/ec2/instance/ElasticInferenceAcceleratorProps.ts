import { Value } from '../../../kloudformation/Value';

export interface ElasticInferenceAcceleratorProps {
  count?: Value<number>
  type: Value<string>
}