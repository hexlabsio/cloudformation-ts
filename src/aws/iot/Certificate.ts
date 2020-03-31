import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type CertificateAttributes = { Arn: Attribute<string> }
export function certificate(certificateProps: Certificate): Certificate & { attributes: CertificateAttributes } { return ({ ...certificateProps, _logicalType: 'AWS::IoT::Certificate', attributes: { Arn: 'Arn' } }) }

export interface Certificate extends KloudResource {
    certificateSigningRequest: Value<string>;
    status: Value<string>;
}