import { Value } from '../../kloudformation/Value';
import { DomainValidationOptionProps } from './certificate/DomainValidationOptionProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function certificate(certificateProps: Certificate): Certificate { return ({ ...certificateProps, _logicalType: '' }) }
  
export interface Certificate extends KloudResource {
  certificateAuthorityArn?: Value<string>
  certificateTransparencyLoggingPreference?: Value<string>
  domainName: Value<string>
  domainValidationOptions?: DomainValidationOptionProps[]
  subjectAlternativeNames?: Value<Value<string>[]>
  tags?: Tag[]
  validationMethod?: Value<string>
}