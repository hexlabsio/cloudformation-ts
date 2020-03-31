import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type PortfolioProductAssociationAttributes = {  }
export function portfolioProductAssociation(portfolioProductAssociationProps: PortfolioProductAssociation): PortfolioProductAssociation & { attributes: PortfolioProductAssociationAttributes } { return ({ ...portfolioProductAssociationProps, _logicalType: 'AWS::ServiceCatalog::PortfolioProductAssociation', attributes: {  } }) }

export interface PortfolioProductAssociation extends KloudResource {
    portfolioId: Value<string>;
    productId: Value<string>;
    sourcePortfolioId?: Value<string>;
    acceptLanguage?: Value<string>;
}