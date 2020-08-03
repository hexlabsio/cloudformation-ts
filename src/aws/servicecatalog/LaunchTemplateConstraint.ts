import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function launchTemplateConstraint(launchTemplateConstraintProps: LaunchTemplateConstraint): LaunchTemplateConstraint { return ({ ...launchTemplateConstraintProps, _logicalType: '' }) }
  
export interface LaunchTemplateConstraint extends KloudResource {
  description?: Value<string>
  acceptLanguage?: Value<string>
  portfolioId: Value<string>
  productId: Value<string>
  rules: Value<string>
}