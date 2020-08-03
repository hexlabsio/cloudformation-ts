import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function stackSetConstraint(stackSetConstraintProps: StackSetConstraint): StackSetConstraint { return ({ ...stackSetConstraintProps, _logicalType: '' }) }
  
export interface StackSetConstraint extends KloudResource {
  description: Value<string>
  stackInstanceControl: Value<string>
  acceptLanguage?: Value<string>
  portfolioId: Value<string>
  productId: Value<string>
  regionList: Value<Value<string>[]>
  adminRole: Value<string>
  accountList: Value<Value<string>[]>
  executionRole: Value<string>
}