import { Value } from '../../../kloudformation/Value';

export interface RuleActionProps {
  allow?: Value<any>
  block?: Value<any>
  count?: Value<any>
}