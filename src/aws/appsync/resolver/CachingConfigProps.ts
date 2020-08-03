import { Value } from '../../../kloudformation/Value';

export interface CachingConfigProps {
  cachingKeys?: Value<Value<string>[]>
  ttl?: Value<number>
}