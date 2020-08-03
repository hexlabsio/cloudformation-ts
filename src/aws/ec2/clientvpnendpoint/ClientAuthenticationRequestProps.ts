import { CertificateAuthenticationRequestProps } from './CertificateAuthenticationRequestProps';
import { Value } from '../../../kloudformation/Value';
import { FederatedAuthenticationRequestProps } from './FederatedAuthenticationRequestProps';
import { DirectoryServiceAuthenticationRequestProps } from './DirectoryServiceAuthenticationRequestProps';

export interface ClientAuthenticationRequestProps {
  mutualAuthentication?: CertificateAuthenticationRequestProps
  type: Value<string>
  federatedAuthentication?: FederatedAuthenticationRequestProps
  activeDirectory?: DirectoryServiceAuthenticationRequestProps
}