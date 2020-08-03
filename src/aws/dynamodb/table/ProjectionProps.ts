import { Value } from '../../../kloudformation/Value';

export interface ProjectionProps {
  nonKeyAttributes?: Value<Value<string>[]>
  projectionType?: Value<string>
}