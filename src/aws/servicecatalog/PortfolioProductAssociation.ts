import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function portfolioProductAssociation(portfolioProductAssociationProps: PortfolioProductAssociation): PortfolioProductAssociation { return ({ ...portfolioProductAssociationProps, _logicalType: '' }) }
  
export interface PortfolioProductAssociation extends KloudResource {
  sourcePortfolioId?: Value<string>
  acceptLanguage?: Value<string>
  portfolioId: Value<string>
  productId: Value<string>
}