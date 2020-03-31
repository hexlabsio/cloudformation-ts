import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type PortfolioAttributes = { PortfolioName: Attribute<string> }
export function portfolio(portfolioProps: Portfolio): Portfolio & { attributes: PortfolioAttributes } { return ({ ...portfolioProps, _logicalType: 'AWS::ServiceCatalog::Portfolio', attributes: { PortfolioName: 'PortfolioName' } }) }

export interface Portfolio extends KloudResource {
    providerName: Value<string>;
    displayName: Value<string>;
    description?: Value<string>;
    acceptLanguage?: Value<string>;
    tags?: Tag[];
}