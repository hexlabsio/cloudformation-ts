import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type PortfolioPrincipalAssociationAttributes = {  }
export function portfolioPrincipalAssociation(portfolioPrincipalAssociationProps: PortfolioPrincipalAssociation): PortfolioPrincipalAssociation & { attributes: PortfolioPrincipalAssociationAttributes } { return ({ ...portfolioPrincipalAssociationProps, _logicalType: 'AWS::ServiceCatalog::PortfolioPrincipalAssociation', attributes: {  } }) }

export interface PortfolioPrincipalAssociation extends KloudResource {
    principalARN: Value<string>;
    portfolioId: Value<string>;
    principalType: Value<string>;
    acceptLanguage?: Value<string>;
}