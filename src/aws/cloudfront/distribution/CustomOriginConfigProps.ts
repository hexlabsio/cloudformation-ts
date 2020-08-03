import { Value } from '../../../kloudformation/Value';

export interface CustomOriginConfigProps {
  originReadTimeout?: Value<number>
  hTTPSPort?: Value<number>
  originKeepaliveTimeout?: Value<number>
  originSSLProtocols?: Value<Value<string>[]>
  hTTPPort?: Value<number>
  originProtocolPolicy: Value<string>
}