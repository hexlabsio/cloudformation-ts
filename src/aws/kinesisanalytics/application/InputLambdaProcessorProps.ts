import { Value } from '../../../kloudformation/Value';

export interface InputLambdaProcessorProps {
  resourceARN: Value<string>
  roleARN: Value<string>
}