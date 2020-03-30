import { Value } from '../../kloudformation/Value';
import { EndpointConfigurationProps } from './domainname/EndpointConfigurationProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function domainName(domainNameProps: DomainName & { logicalName?: string }): DomainName { return ({ ...domainNameProps, _logicalType: 'AWS::ApiGateway::DomainName' }) as unknown as DomainName }

export interface DomainName extends KloudResource {
    domainName: Value<string>;
    certificateArn?: Value<string>;
    endpointConfiguration?: EndpointConfigurationProps;
    regionalCertificateArn?: Value<string>;
    securityPolicy?: Value<string>;
    tags?: Tag[];
}