import { CrlConfigurationProps } from './CrlConfigurationProps';

export function revocationConfigurationProps(revocationConfigurationPropsProps: RevocationConfigurationProps): RevocationConfigurationProps { return (revocationConfigurationPropsProps) as unknown as RevocationConfigurationProps }

export interface RevocationConfigurationProps {
    crlConfiguration?: CrlConfigurationProps;
}