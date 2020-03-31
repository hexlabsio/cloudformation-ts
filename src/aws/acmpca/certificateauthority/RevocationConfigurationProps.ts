import { CrlConfigurationProps } from './CrlConfigurationProps';

export function revocationConfigurationProps(revocationConfigurationPropsProps: RevocationConfigurationProps): RevocationConfigurationProps { return (revocationConfigurationPropsProps) }

export interface RevocationConfigurationProps {
    crlConfiguration?: CrlConfigurationProps;
}