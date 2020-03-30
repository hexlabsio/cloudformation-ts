import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function launchTemplateConstraint(launchTemplateConstraintProps: LaunchTemplateConstraint & { logicalName?: string }): LaunchTemplateConstraint { return ({ ...launchTemplateConstraintProps, _logicalType: 'AWS::ServiceCatalog::LaunchTemplateConstraint' }) as unknown as LaunchTemplateConstraint }

export interface LaunchTemplateConstraint extends KloudResource {
    portfolioId: Value<string>;
    productId: Value<string>;
    rules: Value<string>;
    description?: Value<string>;
    acceptLanguage?: Value<string>;
}