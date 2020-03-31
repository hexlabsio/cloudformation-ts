import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type CertificateAuthorityAttributes = { Arn: Attribute<string>; CertificateSigningRequest: Attribute<string> }
export function certificateAuthority(certificateAuthorityProps: CertificateAuthority): CertificateAuthority & { attributes: CertificateAuthorityAttributes } { return ({ ...certificateAuthorityProps, _logicalType: 'AWS::ACMPCA::CertificateAuthority', attributes: { Arn: 'Arn', CertificateSigningRequest: 'CertificateSigningRequest' } }) }

export interface CertificateAuthority extends KloudResource {
    type: Value<string>;
    keyAlgorithm: Value<string>;
    signingAlgorithm: Value<string>;
    subject: Value<any>;
    revocationConfiguration?: Value<any>;
    tags?: Tag[];
}