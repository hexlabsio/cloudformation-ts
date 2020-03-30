import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function certificateAuthorityActivation(certificateAuthorityActivationProps: CertificateAuthorityActivation & { logicalName?: string }): CertificateAuthorityActivation { return ({ ...certificateAuthorityActivationProps, _logicalType: 'AWS::ACMPCA::CertificateAuthorityActivation' }) as unknown as CertificateAuthorityActivation }

export interface CertificateAuthorityActivation extends KloudResource {
    certificateAuthorityArn: Value<string>;
    certificate: Value<string>;
    certificateChain?: Value<string>;
    status?: Value<string>;
}