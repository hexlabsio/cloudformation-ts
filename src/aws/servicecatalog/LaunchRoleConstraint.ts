import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function launchRoleConstraint(launchRoleConstraintProps: LaunchRoleConstraint & { logicalName?: string }): LaunchRoleConstraint { return ({ ...launchRoleConstraintProps, _logicalType: 'AWS::ServiceCatalog::LaunchRoleConstraint' }) as unknown as LaunchRoleConstraint }

export interface LaunchRoleConstraint extends KloudResource {
    portfolioId: Value<string>;
    productId: Value<string>;
    description?: Value<string>;
    localRoleName?: Value<string>;
    acceptLanguage?: Value<string>;
    roleArn?: Value<string>;
}