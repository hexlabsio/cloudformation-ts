import { Value } from '../../../kloudformation/Value';

export interface PredicateProps {
  type: Value<string>
  dataId: Value<string>
  negated: Value<boolean>
}