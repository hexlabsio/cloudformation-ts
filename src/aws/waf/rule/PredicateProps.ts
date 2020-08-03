import { Value } from '../../../kloudformation/Value';

export interface PredicateProps {
  dataId: Value<string>
  negated: Value<boolean>
  type: Value<string>
}