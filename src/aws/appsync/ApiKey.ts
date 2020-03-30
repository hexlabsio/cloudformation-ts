import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function apiKey(apiKeyProps: ApiKey & { logicalName?: string }): ApiKey { return ({ ...apiKeyProps, _logicalType: 'AWS::AppSync::ApiKey' }) as unknown as ApiKey }

export interface ApiKey extends KloudResource {
    apiId: Value<string>;
    description?: Value<string>;
    expires?: Value<number>;
}