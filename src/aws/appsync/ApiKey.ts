import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ApiKeyAttributes = { ApiKey: Attribute<string>;Arn: Attribute<string> }
export function apiKey(apiKeyProps: ApiKey): ApiKey & {attributes: ApiKeyAttributes} { return ({ ...apiKeyProps, _logicalType: 'AWS::AppSync::ApiKey', attributes: { ApiKey: 'ApiKey',Arn: 'Arn' } }) }
   
export interface ApiKey extends KloudResource {
  description?: Value<string>
  expires?: Value<number>
  apiId: Value<string>
}