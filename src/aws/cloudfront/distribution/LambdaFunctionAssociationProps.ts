import { Value } from '../../../kloudformation/Value';

export interface LambdaFunctionAssociationProps {
  includeBody?: Value<boolean>
  eventType?: Value<string>
  lambdaFunctionARN?: Value<string>
}