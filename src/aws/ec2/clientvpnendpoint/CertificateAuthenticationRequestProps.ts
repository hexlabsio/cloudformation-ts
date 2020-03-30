import { Value } from '../../../kloudformation/Value';

export function certificateAuthenticationRequestProps(certificateAuthenticationRequestPropsProps: CertificateAuthenticationRequestProps): CertificateAuthenticationRequestProps { return (certificateAuthenticationRequestPropsProps) as unknown as CertificateAuthenticationRequestProps }

export interface CertificateAuthenticationRequestProps {
    clientRootCertificateChainArn: Value<string>;
}