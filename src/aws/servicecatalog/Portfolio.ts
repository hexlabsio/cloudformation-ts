import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type PortfolioAttributes = { PortfolioName: Attribute<string> }
export function portfolio(portfolioProps: Portfolio): Portfolio & {attributes: PortfolioAttributes} { return ({ ...portfolioProps, _logicalType: 'AWS::ServiceCatalog::Portfolio', attributes: { PortfolioName: 'PortfolioName' } }) }
   
export interface Portfolio extends KloudResource {
  providerName: Value<string>
  description?: Value<string>
  displayName: Value<string>
  acceptLanguage?: Value<string>
  tags?: Tag[]
}