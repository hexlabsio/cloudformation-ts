import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function certificate(certificateProps: Certificate): Certificate { return ({ ...certificateProps, _logicalType: '' }) }
  
export interface Certificate extends KloudResource {
  certificateIdentifier?: Value<string>
  certificatePem?: Value<string>
  certificateWallet?: Value<string>
}