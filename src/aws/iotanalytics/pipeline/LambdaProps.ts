import { Value } from '../../../kloudformation/Value';

export interface LambdaProps {
  batchSize?: Value<number>
  next?: Value<string>
  lambdaName?: Value<string>
  name?: Value<string>
}