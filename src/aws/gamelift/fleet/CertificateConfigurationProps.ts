import { Value } from '../../../kloudformation/Value';

export function certificateConfigurationProps(certificateConfigurationPropsProps: CertificateConfigurationProps): CertificateConfigurationProps { return (certificateConfigurationPropsProps) }

export interface CertificateConfigurationProps {
    certificateType: Value<string>;
}