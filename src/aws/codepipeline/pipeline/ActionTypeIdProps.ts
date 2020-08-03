import { Value } from '../../../kloudformation/Value';

export interface ActionTypeIdProps {
  category: Value<string>
  owner: Value<string>
  provider: Value<string>
  version: Value<string>
}