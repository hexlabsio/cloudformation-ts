import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type LaunchRoleConstraintAttributes = {  }
export function launchRoleConstraint(launchRoleConstraintProps: LaunchRoleConstraint): LaunchRoleConstraint & { attributes: LaunchRoleConstraintAttributes } { return ({ ...launchRoleConstraintProps, _logicalType: 'AWS::ServiceCatalog::LaunchRoleConstraint', attributes: {  } }) }

export interface LaunchRoleConstraint extends KloudResource {
    portfolioId: Value<string>;
    productId: Value<string>;
    description?: Value<string>;
    localRoleName?: Value<string>;
    acceptLanguage?: Value<string>;
    roleArn?: Value<string>;
}