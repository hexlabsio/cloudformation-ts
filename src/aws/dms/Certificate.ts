import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type CertificateAttributes = {  }
export function certificate(certificateProps: Certificate): Certificate & { attributes: CertificateAttributes } { return ({ ...certificateProps, _logicalType: 'AWS::DMS::Certificate', attributes: {  } }) }

export interface Certificate extends KloudResource {
    certificateIdentifier?: Value<string>;
    certificatePem?: Value<string>;
    certificateWallet?: Value<string>;
}