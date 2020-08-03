import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function portfolioPrincipalAssociation(portfolioPrincipalAssociationProps: PortfolioPrincipalAssociation): PortfolioPrincipalAssociation { return ({ ...portfolioPrincipalAssociationProps, _logicalType: '' }) }
  
export interface PortfolioPrincipalAssociation extends KloudResource {
  principalARN: Value<string>
  acceptLanguage?: Value<string>
  portfolioId: Value<string>
  principalType: Value<string>
}