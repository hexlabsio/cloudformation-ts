import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function portfolioShare(portfolioShareProps: PortfolioShare & { logicalName?: string }): PortfolioShare { return ({ ...portfolioShareProps, _logicalType: 'AWS::ServiceCatalog::PortfolioShare' }) as unknown as PortfolioShare }

export interface PortfolioShare extends KloudResource {
    accountId: Value<string>;
    portfolioId: Value<string>;
    acceptLanguage?: Value<string>;
}