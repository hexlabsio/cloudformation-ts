import { SubDomainSettingProps } from './domain/SubDomainSettingProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DomainAttributes = { AutoSubDomainIAMRole: Attribute<string>;DomainName: Attribute<string>;StatusReason: Attribute<string>;EnableAutoSubDomain: Attribute<boolean>;Arn: Attribute<string>;DomainStatus: Attribute<string>;AutoSubDomainCreationPatterns: Attribute<string[]>;CertificateRecord: Attribute<string> }
export function domain(domainProps: Domain): Domain & {attributes: DomainAttributes} { return ({ ...domainProps, _logicalType: 'AWS::Amplify::Domain', attributes: { AutoSubDomainIAMRole: 'AutoSubDomainIAMRole',DomainName: 'DomainName',StatusReason: 'StatusReason',EnableAutoSubDomain: 'EnableAutoSubDomain',Arn: 'Arn',DomainStatus: 'DomainStatus',AutoSubDomainCreationPatterns: 'AutoSubDomainCreationPatterns',CertificateRecord: 'CertificateRecord' } }) }
   
export interface Domain extends KloudResource {
  subDomainSettings: SubDomainSettingProps[]
  appId: Value<string>
  autoSubDomainIAMRole?: Value<string>
  domainName: Value<string>
  enableAutoSubDomain?: Value<boolean>
  autoSubDomainCreationPatterns?: Value<Value<string>[]>
}