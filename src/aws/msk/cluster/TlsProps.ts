import { Value } from '../../../kloudformation/Value';

export interface TlsProps {
  certificateAuthorityArnList?: Value<Value<string>[]>
}