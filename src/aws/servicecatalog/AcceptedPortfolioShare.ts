import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function acceptedPortfolioShare(acceptedPortfolioShareProps: AcceptedPortfolioShare & { logicalName?: string }): AcceptedPortfolioShare { return ({ ...acceptedPortfolioShareProps, _logicalType: 'AWS::ServiceCatalog::AcceptedPortfolioShare' }) as unknown as AcceptedPortfolioShare }

export interface AcceptedPortfolioShare extends KloudResource {
    portfolioId: Value<string>;
    acceptLanguage?: Value<string>;
}