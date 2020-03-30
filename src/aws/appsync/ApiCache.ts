import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function apiCache(apiCacheProps: ApiCache & { logicalName?: string }): ApiCache { return ({ ...apiCacheProps, _logicalType: 'AWS::AppSync::ApiCache' }) as unknown as ApiCache }

export interface ApiCache extends KloudResource {
    type: Value<string>;
    apiId: Value<string>;
    apiCachingBehavior: Value<string>;
    ttl: Value<number>;
    transitEncryptionEnabled?: Value<boolean>;
    atRestEncryptionEnabled?: Value<boolean>;
}