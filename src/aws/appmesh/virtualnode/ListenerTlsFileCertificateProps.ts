import { Value } from '../../../kloudformation/Value';

export interface ListenerTlsFileCertificateProps {
  privateKey: Value<string>
  certificateChain: Value<string>
}