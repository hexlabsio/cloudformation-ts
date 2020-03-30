import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function portfolio(portfolioProps: Portfolio & { logicalName?: string }): Portfolio { return ({ ...portfolioProps, _logicalType: 'AWS::ServiceCatalog::Portfolio' }) as unknown as Portfolio }

export interface Portfolio extends KloudResource {
    providerName: Value<string>;
    displayName: Value<string>;
    description?: Value<string>;
    acceptLanguage?: Value<string>;
    tags?: Tag[];
}