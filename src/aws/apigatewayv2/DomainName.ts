import { Value } from '../../kloudformation/Value';
import { DomainNameConfigurationProps } from './domainName/DomainNameConfigurationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DomainNameAttributes = { RegionalHostedZoneId: Attribute<string>;RegionalDomainName: Attribute<string> }
export function domainName(domainNameProps: DomainName): DomainName & {attributes: DomainNameAttributes} { return ({ ...domainNameProps, _logicalType: 'AWS::ApiGatewayV2::DomainName', attributes: { RegionalHostedZoneId: 'RegionalHostedZoneId',RegionalDomainName: 'RegionalDomainName' } }) }
   
export interface DomainName extends KloudResource {
  domainName: Value<string>
  domainNameConfigurations?: DomainNameConfigurationProps[]
  tags?: Value<any>
}