import { Value } from '../../../kloudformation/Value';

export interface ComputeEnvironmentOrderProps {
  computeEnvironment: Value<string>
  order: Value<number>
}