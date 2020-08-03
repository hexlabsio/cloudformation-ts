import { Value } from '../../../kloudformation/Value';

export interface StageKeyProps {
  restApiId?: Value<string>
  stageName?: Value<string>
}