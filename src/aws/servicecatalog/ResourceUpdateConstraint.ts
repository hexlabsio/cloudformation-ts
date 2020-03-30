import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function resourceUpdateConstraint(resourceUpdateConstraintProps: ResourceUpdateConstraint & { logicalName?: string }): ResourceUpdateConstraint { return ({ ...resourceUpdateConstraintProps, _logicalType: 'AWS::ServiceCatalog::ResourceUpdateConstraint' }) as unknown as ResourceUpdateConstraint }

export interface ResourceUpdateConstraint extends KloudResource {
    tagUpdateOnProvisionedProduct: Value<string>;
    portfolioId: Value<string>;
    productId: Value<string>;
    description?: Value<string>;
    acceptLanguage?: Value<string>;
}