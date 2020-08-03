import { Value } from '../../../kloudformation/Value';

export interface HttpHeaderConfigProps {
  httpHeaderName?: Value<string>
  values?: Value<Value<string>[]>
}