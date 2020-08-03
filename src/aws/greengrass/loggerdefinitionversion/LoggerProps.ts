import { Value } from '../../../kloudformation/Value';

export interface LoggerProps {
  space?: Value<number>
  type: Value<string>
  level: Value<string>
  id: Value<string>
  component: Value<string>
}