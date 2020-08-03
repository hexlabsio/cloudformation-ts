import { Value } from '../../../kloudformation/Value';

export interface S3Props {
  bucket?: Value<string>
  enabled: Value<boolean>
  prefix?: Value<string>
}