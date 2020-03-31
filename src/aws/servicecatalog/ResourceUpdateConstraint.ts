import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ResourceUpdateConstraintAttributes = {  }
export function resourceUpdateConstraint(resourceUpdateConstraintProps: ResourceUpdateConstraint): ResourceUpdateConstraint & { attributes: ResourceUpdateConstraintAttributes } { return ({ ...resourceUpdateConstraintProps, _logicalType: 'AWS::ServiceCatalog::ResourceUpdateConstraint', attributes: {  } }) }

export interface ResourceUpdateConstraint extends KloudResource {
    tagUpdateOnProvisionedProduct: Value<string>;
    portfolioId: Value<string>;
    productId: Value<string>;
    description?: Value<string>;
    acceptLanguage?: Value<string>;
}