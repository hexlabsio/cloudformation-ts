import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type PortfolioShareAttributes = {  }
export function portfolioShare(portfolioShareProps: PortfolioShare): PortfolioShare & { attributes: PortfolioShareAttributes } { return ({ ...portfolioShareProps, _logicalType: 'AWS::ServiceCatalog::PortfolioShare', attributes: {  } }) }

export interface PortfolioShare extends KloudResource {
    accountId: Value<string>;
    portfolioId: Value<string>;
    acceptLanguage?: Value<string>;
}