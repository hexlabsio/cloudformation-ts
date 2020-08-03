import { Value } from '../../../kloudformation/Value';

export interface ProductionVariantProps {
  modelName: Value<string>
  variantName: Value<string>
  initialInstanceCount: Value<number>
  instanceType: Value<string>
  acceleratorType?: Value<string>
  initialVariantWeight: Value<number>
}