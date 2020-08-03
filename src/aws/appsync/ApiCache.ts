import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function apiCache(apiCacheProps: ApiCache): ApiCache { return ({ ...apiCacheProps, _logicalType: '' }) }
  
export interface ApiCache extends KloudResource {
  type: Value<string>
  transitEncryptionEnabled?: Value<boolean>
  atRestEncryptionEnabled?: Value<boolean>
  apiId: Value<string>
  apiCachingBehavior: Value<string>
  ttl: Value<number>
}