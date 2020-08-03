import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function launchRoleConstraint(launchRoleConstraintProps: LaunchRoleConstraint): LaunchRoleConstraint { return ({ ...launchRoleConstraintProps, _logicalType: '' }) }
  
export interface LaunchRoleConstraint extends KloudResource {
  description?: Value<string>
  localRoleName?: Value<string>
  acceptLanguage?: Value<string>
  portfolioId: Value<string>
  productId: Value<string>
  roleArn?: Value<string>
}