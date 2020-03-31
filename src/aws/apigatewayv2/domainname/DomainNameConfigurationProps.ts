import { Value } from '../../../kloudformation/Value';

export function domainNameConfigurationProps(domainNameConfigurationPropsProps: DomainNameConfigurationProps): DomainNameConfigurationProps { return (domainNameConfigurationPropsProps) }

export interface DomainNameConfigurationProps {
    endpointType?: Value<string>;
    certificateName?: Value<string>;
    certificateArn?: Value<string>;
}