import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ApiCacheAttributes = {  }
export function apiCache(apiCacheProps: ApiCache): ApiCache & { attributes: ApiCacheAttributes } { return ({ ...apiCacheProps, _logicalType: 'AWS::AppSync::ApiCache', attributes: {  } }) }

export interface ApiCache extends KloudResource {
    type: Value<string>;
    apiId: Value<string>;
    apiCachingBehavior: Value<string>;
    ttl: Value<number>;
    transitEncryptionEnabled?: Value<boolean>;
    atRestEncryptionEnabled?: Value<boolean>;
}