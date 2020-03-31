import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type AcceptedPortfolioShareAttributes = {  }
export function acceptedPortfolioShare(acceptedPortfolioShareProps: AcceptedPortfolioShare): AcceptedPortfolioShare & { attributes: AcceptedPortfolioShareAttributes } { return ({ ...acceptedPortfolioShareProps, _logicalType: 'AWS::ServiceCatalog::AcceptedPortfolioShare', attributes: {  } }) }

export interface AcceptedPortfolioShare extends KloudResource {
    portfolioId: Value<string>;
    acceptLanguage?: Value<string>;
}