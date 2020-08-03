import { Value } from '../../../kloudformation/Value';

export interface CustomErrorResponseProps {
  responseCode?: Value<number>
  errorCachingMinTTL?: Value<number>
  errorCode: Value<number>
  responsePagePath?: Value<string>
}