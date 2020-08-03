import { Value } from '../../kloudformation/Value';
import { SubjectProps } from './certificateAuthority/SubjectProps';
import { RevocationConfigurationProps } from './certificateAuthority/RevocationConfigurationProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type CertificateAuthorityAttributes = { Arn: Attribute<string>;CertificateSigningRequest: Attribute<string> }
export function certificateAuthority(certificateAuthorityProps: CertificateAuthority): CertificateAuthority & {attributes: CertificateAuthorityAttributes} { return ({ ...certificateAuthorityProps, _logicalType: 'AWS::ACMPCA::CertificateAuthority', attributes: { Arn: 'Arn',CertificateSigningRequest: 'CertificateSigningRequest' } }) }
   
export interface CertificateAuthority extends KloudResource {
  type: Value<string>
  keyAlgorithm: Value<string>
  signingAlgorithm: Value<string>
  subject: SubjectProps
  revocationConfiguration?: RevocationConfigurationProps
  tags?: Tag[]
}