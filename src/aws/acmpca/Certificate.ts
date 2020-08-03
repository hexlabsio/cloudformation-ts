import { Value } from '../../kloudformation/Value';
import { ValidityProps } from './certificate/ValidityProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type CertificateAttributes = { Certificate: Attribute<string>;Arn: Attribute<string> }
export function certificate(certificateProps: Certificate): Certificate & {attributes: CertificateAttributes} { return ({ ...certificateProps, _logicalType: 'AWS::ACMPCA::Certificate', attributes: { Certificate: 'Certificate',Arn: 'Arn' } }) }
   
export interface Certificate extends KloudResource {
  certificateAuthorityArn: Value<string>
  certificateSigningRequest: Value<string>
  signingAlgorithm: Value<string>
  templateArn?: Value<string>
  validity: ValidityProps
}