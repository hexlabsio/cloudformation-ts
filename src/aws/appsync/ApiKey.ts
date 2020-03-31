import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ApiKeyAttributes = { ApiKey: Attribute<string>; Arn: Attribute<string> }
export function apiKey(apiKeyProps: ApiKey): ApiKey & { attributes: ApiKeyAttributes } { return ({ ...apiKeyProps, _logicalType: 'AWS::AppSync::ApiKey', attributes: { ApiKey: 'ApiKey', Arn: 'Arn' } }) }

export interface ApiKey extends KloudResource {
    apiId: Value<string>;
    description?: Value<string>;
    expires?: Value<number>;
}