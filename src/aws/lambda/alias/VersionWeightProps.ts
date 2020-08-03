import { Value } from '../../../kloudformation/Value';

export interface VersionWeightProps {
  functionVersion: Value<string>
  functionWeight: Value<number>
}