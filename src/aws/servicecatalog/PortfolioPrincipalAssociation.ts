import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function portfolioPrincipalAssociation(portfolioPrincipalAssociationProps: PortfolioPrincipalAssociation & { logicalName?: string }): PortfolioPrincipalAssociation { return ({ ...portfolioPrincipalAssociationProps, _logicalType: 'AWS::ServiceCatalog::PortfolioPrincipalAssociation' }) as unknown as PortfolioPrincipalAssociation }

export interface PortfolioPrincipalAssociation extends KloudResource {
    principalARN: Value<string>;
    portfolioId: Value<string>;
    principalType: Value<string>;
    acceptLanguage?: Value<string>;
}