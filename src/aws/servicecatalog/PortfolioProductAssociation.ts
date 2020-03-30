import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function portfolioProductAssociation(portfolioProductAssociationProps: PortfolioProductAssociation & { logicalName?: string }): PortfolioProductAssociation { return ({ ...portfolioProductAssociationProps, _logicalType: 'AWS::ServiceCatalog::PortfolioProductAssociation' }) as unknown as PortfolioProductAssociation }

export interface PortfolioProductAssociation extends KloudResource {
    portfolioId: Value<string>;
    productId: Value<string>;
    sourcePortfolioId?: Value<string>;
    acceptLanguage?: Value<string>;
}