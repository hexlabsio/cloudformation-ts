import { Value } from '../../kloudformation/Value';
import { StageKeyProps } from './apiKey/StageKeyProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function apiKey(apiKeyProps: ApiKey): ApiKey { return ({ ...apiKeyProps, _logicalType: '' }) }
  
export interface ApiKey extends KloudResource {
  customerId?: Value<string>
  description?: Value<string>
  enabled?: Value<boolean>
  generateDistinctId?: Value<boolean>
  name?: Value<string>
  stageKeys?: StageKeyProps[]
  tags?: Tag[]
  value?: Value<string>
}