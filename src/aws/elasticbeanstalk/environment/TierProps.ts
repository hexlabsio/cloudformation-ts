import { Value } from '../../../kloudformation/Value';

export interface TierProps {
  name?: Value<string>
  type?: Value<string>
  version?: Value<string>
}