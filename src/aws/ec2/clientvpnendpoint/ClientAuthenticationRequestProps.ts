import { Value } from '../../../kloudformation/Value';
import { CertificateAuthenticationRequestProps } from './CertificateAuthenticationRequestProps';
import { DirectoryServiceAuthenticationRequestProps } from './DirectoryServiceAuthenticationRequestProps';

export function clientAuthenticationRequestProps(clientAuthenticationRequestPropsProps: ClientAuthenticationRequestProps): ClientAuthenticationRequestProps { return (clientAuthenticationRequestPropsProps) as unknown as ClientAuthenticationRequestProps }

export interface ClientAuthenticationRequestProps {
    type: Value<string>;
    mutualAuthentication?: CertificateAuthenticationRequestProps;
    activeDirectory?: DirectoryServiceAuthenticationRequestProps;
}