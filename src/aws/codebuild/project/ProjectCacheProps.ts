import { Value } from '../../../kloudformation/Value';

export interface ProjectCacheProps {
  modes?: Value<Value<string>[]>
  type: Value<string>
  location?: Value<string>
}