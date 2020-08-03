import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function portfolioShare(portfolioShareProps: PortfolioShare): PortfolioShare { return ({ ...portfolioShareProps, _logicalType: '' }) }
  
export interface PortfolioShare extends KloudResource {
  accountId: Value<string>
  acceptLanguage?: Value<string>
  portfolioId: Value<string>
}