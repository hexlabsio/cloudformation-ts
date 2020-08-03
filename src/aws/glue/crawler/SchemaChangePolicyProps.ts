import { Value } from '../../../kloudformation/Value';

export interface SchemaChangePolicyProps {
  updateBehavior?: Value<string>
  deleteBehavior?: Value<string>
}