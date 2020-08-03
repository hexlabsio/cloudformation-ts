import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function resourceUpdateConstraint(resourceUpdateConstraintProps: ResourceUpdateConstraint): ResourceUpdateConstraint { return ({ ...resourceUpdateConstraintProps, _logicalType: '' }) }
  
export interface ResourceUpdateConstraint extends KloudResource {
  description?: Value<string>
  acceptLanguage?: Value<string>
  tagUpdateOnProvisionedProduct: Value<string>
  portfolioId: Value<string>
  productId: Value<string>
}