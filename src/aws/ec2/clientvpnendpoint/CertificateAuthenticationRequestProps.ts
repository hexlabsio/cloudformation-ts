import { Value } from '../../../kloudformation/Value';

export function certificateAuthenticationRequestProps(certificateAuthenticationRequestPropsProps: CertificateAuthenticationRequestProps): CertificateAuthenticationRequestProps { return (certificateAuthenticationRequestPropsProps) }

export interface CertificateAuthenticationRequestProps {
    clientRootCertificateChainArn: Value<string>;
}