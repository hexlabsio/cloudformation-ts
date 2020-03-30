import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function stackSetConstraint(stackSetConstraintProps: StackSetConstraint & { logicalName?: string }): StackSetConstraint { return ({ ...stackSetConstraintProps, _logicalType: 'AWS::ServiceCatalog::StackSetConstraint' }) as unknown as StackSetConstraint }

export interface StackSetConstraint extends KloudResource {
    description: Value<string>;
    stackInstanceControl: Value<string>;
    portfolioId: Value<string>;
    productId: Value<string>;
    regionList: Value<Value<string>[]>;
    adminRole: Value<string>;
    accountList: Value<Value<string>[]>;
    executionRole: Value<string>;
    acceptLanguage?: Value<string>;
}