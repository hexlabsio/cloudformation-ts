import { Value } from '../../../kloudformation/Value';

export interface LoggingProps {
  bucket: Value<string>
  enabled: Value<boolean>
  prefix: Value<string>
}