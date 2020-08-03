import { Value } from '../../kloudformation/Value';
import { EndpointConfigurationProps } from './domainName/EndpointConfigurationProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DomainNameAttributes = { DistributionDomainName: Attribute<string>;DistributionHostedZoneId: Attribute<string>;RegionalDomainName: Attribute<string>;RegionalHostedZoneId: Attribute<string> }
export function domainName(domainNameProps: DomainName): DomainName & {attributes: DomainNameAttributes} { return ({ ...domainNameProps, _logicalType: 'AWS::ApiGateway::DomainName', attributes: { DistributionDomainName: 'DistributionDomainName',DistributionHostedZoneId: 'DistributionHostedZoneId',RegionalDomainName: 'RegionalDomainName',RegionalHostedZoneId: 'RegionalHostedZoneId' } }) }
   
export interface DomainName extends KloudResource {
  certificateArn?: Value<string>
  domainName: Value<string>
  endpointConfiguration?: EndpointConfigurationProps
  regionalCertificateArn?: Value<string>
  securityPolicy?: Value<string>
  tags?: Tag[]
}