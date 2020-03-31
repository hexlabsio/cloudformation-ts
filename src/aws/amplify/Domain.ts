import { SubDomainSettingProps } from './domain/SubDomainSettingProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type DomainAttributes = { DomainName: Attribute<string>; StatusReason: Attribute<string>; Arn: Attribute<string>; DomainStatus: Attribute<string>; CertificateRecord: Attribute<string> }
export function domain(domainProps: Domain): Domain & { attributes: DomainAttributes } { return ({ ...domainProps, _logicalType: 'AWS::Amplify::Domain', attributes: { DomainName: 'DomainName', StatusReason: 'StatusReason', Arn: 'Arn', DomainStatus: 'DomainStatus', CertificateRecord: 'CertificateRecord' } }) }

export interface Domain extends KloudResource {
    subDomainSettings: SubDomainSettingProps[];
    appId: Value<string>;
    domainName: Value<string>;
}