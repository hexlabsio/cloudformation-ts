import { Value } from '../../kloudformation/Value';
import { DomainNameConfigurationProps } from './domainname/DomainNameConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function domainName(domainNameProps: DomainName & { logicalName?: string }): DomainName { return ({ ...domainNameProps, _logicalType: 'AWS::ApiGatewayV2::DomainName' }) as unknown as DomainName }

export interface DomainName extends KloudResource {
    domainName: Value<string>;
    domainNameConfigurations?: DomainNameConfigurationProps[];
    tags?: Value<any>;
}