import { Value } from '../../kloudformation/Value';
import { DomainValidationOptionProps } from './certificate/DomainValidationOptionProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type CertificateAttributes = {  }
export function certificate(certificateProps: Certificate): Certificate & { attributes: CertificateAttributes } { return ({ ...certificateProps, _logicalType: 'AWS::CertificateManager::Certificate', attributes: {  } }) }

export interface Certificate extends KloudResource {
    domainName: Value<string>;
    domainValidationOptions?: DomainValidationOptionProps[];
    subjectAlternativeNames?: Value<Value<string>[]>;
    tags?: Tag[];
    validationMethod?: Value<string>;
}