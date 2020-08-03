import { Value } from '../../../kloudformation/Value';

export interface S3TargetProps {
  path?: Value<string>
  exclusions?: Value<Value<string>[]>
}