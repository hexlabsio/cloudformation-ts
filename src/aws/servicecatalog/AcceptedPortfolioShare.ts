import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function acceptedPortfolioShare(acceptedPortfolioShareProps: AcceptedPortfolioShare): AcceptedPortfolioShare { return ({ ...acceptedPortfolioShareProps, _logicalType: '' }) }
  
export interface AcceptedPortfolioShare extends KloudResource {
  acceptLanguage?: Value<string>
  portfolioId: Value<string>
}