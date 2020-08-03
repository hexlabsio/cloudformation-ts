import { Value } from '../kloudformation/Value';

export interface Tag {
  key: Value<string>
  value: Value<string>
}