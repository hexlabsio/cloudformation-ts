import { Value } from '../../../kloudformation/Value';

export interface VirtualGatewayListenerTlsFileCertificateProps {
  privateKey: Value<string>
  certificateChain: Value<string>
}