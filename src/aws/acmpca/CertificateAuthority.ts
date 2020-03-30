import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function certificateAuthority(certificateAuthorityProps: CertificateAuthority & { logicalName?: string }): CertificateAuthority { return ({ ...certificateAuthorityProps, _logicalType: 'AWS::ACMPCA::CertificateAuthority' }) as unknown as CertificateAuthority }

export interface CertificateAuthority extends KloudResource {
    type: Value<string>;
    keyAlgorithm: Value<string>;
    signingAlgorithm: Value<string>;
    subject: Value<any>;
    revocationConfiguration?: Value<any>;
    tags?: Tag[];
}