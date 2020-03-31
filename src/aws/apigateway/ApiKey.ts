import { Value } from '../../kloudformation/Value';
import { StageKeyProps } from './apikey/StageKeyProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ApiKeyAttributes = {  }
export function apiKey(apiKeyProps: ApiKey): ApiKey & { attributes: ApiKeyAttributes } { return ({ ...apiKeyProps, _logicalType: 'AWS::ApiGateway::ApiKey', attributes: {  } }) }

export interface ApiKey extends KloudResource {
    customerId?: Value<string>;
    description?: Value<string>;
    enabled?: Value<boolean>;
    generateDistinctId?: Value<boolean>;
    name?: Value<string>;
    stageKeys?: StageKeyProps[];
    tags?: Tag[];
    value?: Value<string>;
}