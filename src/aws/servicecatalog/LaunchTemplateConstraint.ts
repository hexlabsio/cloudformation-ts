import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type LaunchTemplateConstraintAttributes = {  }
export function launchTemplateConstraint(launchTemplateConstraintProps: LaunchTemplateConstraint): LaunchTemplateConstraint & { attributes: LaunchTemplateConstraintAttributes } { return ({ ...launchTemplateConstraintProps, _logicalType: 'AWS::ServiceCatalog::LaunchTemplateConstraint', attributes: {  } }) }

export interface LaunchTemplateConstraint extends KloudResource {
    portfolioId: Value<string>;
    productId: Value<string>;
    rules: Value<string>;
    description?: Value<string>;
    acceptLanguage?: Value<string>;
}