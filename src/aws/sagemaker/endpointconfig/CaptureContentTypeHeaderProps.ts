import { Value } from '../../../kloudformation/Value';

export interface CaptureContentTypeHeaderProps {
  jsonContentTypes?: Value<Value<string>[]>
  csvContentTypes?: Value<Value<string>[]>
}