import { Value } from '../../kloudformation/Value';
import { EndpointConfigurationProps } from './domainname/EndpointConfigurationProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type DomainNameAttributes = { DistributionDomainName: Attribute<string>; DistributionHostedZoneId: Attribute<string>; RegionalDomainName: Attribute<string>; RegionalHostedZoneId: Attribute<string> }
export function domainName(domainNameProps: DomainName): DomainName & { attributes: DomainNameAttributes } { return ({ ...domainNameProps, _logicalType: 'AWS::ApiGateway::DomainName', attributes: { DistributionDomainName: 'DistributionDomainName', DistributionHostedZoneId: 'DistributionHostedZoneId', RegionalDomainName: 'RegionalDomainName', RegionalHostedZoneId: 'RegionalHostedZoneId' } }) }

export interface DomainName extends KloudResource {
    domainName: Value<string>;
    certificateArn?: Value<string>;
    endpointConfiguration?: EndpointConfigurationProps;
    regionalCertificateArn?: Value<string>;
    securityPolicy?: Value<string>;
    tags?: Tag[];
}