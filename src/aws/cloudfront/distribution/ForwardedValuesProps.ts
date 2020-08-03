import { CookiesProps } from './CookiesProps';
import { Value } from '../../../kloudformation/Value';

export interface ForwardedValuesProps {
  cookies?: CookiesProps
  headers?: Value<Value<string>[]>
  queryString: Value<boolean>
  queryStringCacheKeys?: Value<Value<string>[]>
}