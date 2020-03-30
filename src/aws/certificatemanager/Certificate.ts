import { Value } from '../../kloudformation/Value';
import { DomainValidationOptionProps } from './certificate/DomainValidationOptionProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function certificate(certificateProps: Certificate & { logicalName?: string }): Certificate { return ({ ...certificateProps, _logicalType: 'AWS::CertificateManager::Certificate' }) as unknown as Certificate }

export interface Certificate extends KloudResource {
    domainName: Value<string>;
    domainValidationOptions?: DomainValidationOptionProps[];
    subjectAlternativeNames?: Value<Value<string>[]>;
    tags?: Tag[];
    validationMethod?: Value<string>;
}